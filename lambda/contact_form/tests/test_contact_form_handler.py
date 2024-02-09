import json
import unittest
from unittest.mock import patch, MagicMock
from moto import mock_aws
from contact_form.contact_form_handler import lambda_handler, send_email


class TestLambdaFunction(unittest.TestCase):
    def mock_event(
        self,
        name="Test User",
        email="testuser@example.com",
        contact_type="Volunteer",
        message="This is a test message",
    ):
        return {
            "name": name,
            "email": email,
            "contact_type": contact_type,
            "message": message,
        }

    @mock_aws
    def test_send_email_success(self):
        mock_ses_client = MagicMock()
        event = self.mock_event()

        with patch("contact_form.contact_form_handler.ses", mock_ses_client):
            send_email(event)

            mock_ses_client.send_email.assert_called_with(
                Destination={"ToAddresses": ["info@clearviction.org"]},
                Message={
                    "Body": {
                        "Text": {
                            "Data": "Name: Test User\nEmail: testuser@example.com\nContact Type: Volunteer\nMessage: This is a test message",
                            "Charset": "UTF-8",
                        }
                    },
                    "Subject": {
                        "Data": "Website Contact Form: Test User",
                        "Charset": "UTF-8",
                    },
                },
                Source="info@clearviction.org",
            )

    @mock_aws
    def test_send_email_exception(self):
        mock_ses_client = MagicMock()
        mock_ses_client.send_email.side_effect = Exception("Test Exception")
        event = self.mock_event()

        with patch(
            "contact_form.contact_form_handler.ses", mock_ses_client
        ), self.assertRaises(Exception) as context:
            send_email(event)

            self.assertTrue("Test Exception" in str(context.exception))

    @mock_aws
    def test_lambda_handler_success(self):
        event = self.mock_event()

        with patch("contact_form.contact_form_handler.send_email") as mock_send_email:
            response = lambda_handler(event, None)

            self.assertEqual(response["statusCode"], 200)
            self.assertEqual(response["headers"]["Content-Type"], "application/json")
            self.assertEqual(response["headers"]["Access-Control-Allow-Origin"], "*")
            self.assertEqual(json.loads(response["body"]), {"result": "Success"})
            mock_send_email.assert_called_once_with(event)


if __name__ == "__main__":
    unittest.main()
