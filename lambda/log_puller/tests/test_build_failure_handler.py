import json
import os
import unittest
from unittest.mock import patch, MagicMock
from log_puller.build_failure_handler import lambda_handler, extract_info_from_message, get_build_logs_url, post_comment_to_github

MOCK_MESSAGE = "Build notification from the AWS Amplify Console for app: https://pr-200.d12345.amplifyapp.com/. Your build status is FAILED. Go to https://console.aws.amazon.com/amplify/home?region=us-west-2#d12345/pr-200/1 to view details on your build."

class TestLambdaFunction(unittest.TestCase):
    def setUp(self):
        os.environ['GITHUB_TOKEN'] = 'fake-token'

    @patch('log_puller.build_failure_handler.boto3.client')
    @patch('log_puller.build_failure_handler.request.urlopen')
    @patch('log_puller.build_failure_handler.extract_info_from_message')
    @patch('log_puller.build_failure_handler.get_build_logs_url')
    @patch('log_puller.build_failure_handler.post_comment_to_github')
    def test_lambda_handler_with_failed_build(self, mock_post_comment, mock_get_logs_url, mock_extract_info, mock_urlopen, mock_boto3):
        mock_extract_info.return_value = ('app_id', 'branch', 'build_id', 'pr_number')
        mock_get_logs_url.return_value = 'https://logs.url'
        mock_response = MagicMock()
        mock_response.read.return_value.decode.return_value = 'Log content'
        mock_urlopen.return_value.__enter__.return_value = mock_response
        mock_post_comment.return_value = None

        event = {
            'Records': [{
                'Sns': {
                    'Message': MOCK_MESSAGE
                }
            }]
        }
        context = {}

        response = lambda_handler(event, context)

        self.assertEqual(response['statusCode'], 200)
        self.assertEqual(response['body'], json.dumps('Process completed successfully!'))

        mock_extract_info.assert_called_once_with(MOCK_MESSAGE)
        mock_boto3.assert_called_once_with('amplify')
        mock_get_logs_url.assert_called_once_with(mock_boto3.return_value, 'app_id', 'branch', 'build_id')
        mock_urlopen.assert_called_once_with('https://logs.url')
        mock_post_comment.assert_called_once_with('pr_number', 'Log content')

    @patch('boto3.client')
    def test_get_build_logs_url(self, mock_boto3_client):
        mock_amplify_response = {
            'job': {
                'steps': [{
                    'logUrl': 'https://example.com/logs'
                }]
            }
        }
        mock_boto3_client.return_value.get_job.return_value = mock_amplify_response

        client = mock_boto3_client('amplify')
        logs_url = get_build_logs_url(client, 'app-id', 'branch-name', 'build-id')
        self.assertEqual(logs_url, 'https://example.com/logs')

    @patch('log_puller.build_failure_handler.request.urlopen')
    @patch('log_puller.build_failure_handler.json.dumps')
    def test_post_comment_to_github(self, mock_json_dumps, mock_urlopen):
        mock_response = MagicMock()
        mock_response.read.return_value = b'{"message": "Comment created"}'
        mock_urlopen.return_value = mock_response

        post_comment_to_github('1', 'Log content')

        mock_urlopen.assert_called()
        mock_json_dumps.assert_called_with({
            "body": "Amplify preview build failed. Logs:\n```\nLog content \n```"
        })

    def test_extract_info_successful(self):
        expected_output = ('d12345', 'pr-200', '1', '200')

        app_id, branch_name, build_id, pr_number = extract_info_from_message(MOCK_MESSAGE)

        self.assertEqual(app_id, expected_output[0])
        self.assertEqual(branch_name, expected_output[1])
        self.assertEqual(build_id, expected_output[2])
        self.assertEqual(pr_number, expected_output[3])

    def test_missing_info_raises_value_error(self):
        mock_message_missing_info = "Build notification from the AWS Amplify Console for app. Your build status is FAILED."

        with self.assertRaises(ValueError) as context:
            extract_info_from_message(mock_message_missing_info)

        self.assertTrue('Missing required information' in str(context.exception))

if __name__ == '__main__':
    unittest.main()