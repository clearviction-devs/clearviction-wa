import boto3
import json
import os
import re
from urllib import request

REPO_NAME = "clearviction-wa"
REPO_OWNER = "clearviction-devs"

BUILD_DETAILS_URL_PATTERN = r"https:\/\/console.aws.amazon.com\/amplify\/home[^#\s]+#[^\/]+\/[^\/]+\/(\d+)"
APP_URL_PATTERN = r"for app: (https:\/\/[a-zA-Z0-9.-]+\/)"
PR_PATTERN = r'pr-(\d+)'


def lambda_handler(event, context):
    message = event['Records'][0]['Sns']['Message']

    if "Your build status is FAILED" in message:
        app_id, branch, build_id, pr_number = extract_info_from_message(message)
        print(f"App ID: {app_id}, Branch: {branch}, Build ID: {build_id}, PR Number: {pr_number}")

        amplify_client = boto3.client('amplify')
        logs_url = get_build_logs_url(amplify_client, app_id, branch, build_id)

        with request.urlopen(logs_url) as response:
            logs_content = response.read().decode('utf-8')
            post_comment_to_github(pr_number, logs_content)

    return {
        'statusCode': 200,
        'body': json.dumps('Process completed successfully!')
    }


def extract_info_from_message(message):
    def get_build_info(message):
        match_app_url = re.search(APP_URL_PATTERN, message)
        app_id, branch_name, pr_number = None, None, None
        if match_app_url:
            app_url = match_app_url.group(1)
            parts = app_url.split('.')
            if len(parts) > 2:
                app_id = parts[-3]
                branch_parts = parts[0].split('//')[-1]
                branch_name = branch_parts
                pr_match = re.search(PR_PATTERN, branch_parts)
                if pr_match:
                    pr_number = pr_match.group(1)
        return app_id, branch_name, pr_number

    def get_build_id(message):
        match_build_details_url = re.search(BUILD_DETAILS_URL_PATTERN, message)

        build_id = None
        if match_build_details_url:
            build_id = match_build_details_url.group(1)
        return build_id

    app_id, branch_name, pr_number = get_build_info(message)
    build_id = get_build_id(message)

    if None in [app_id, branch_name, build_id, pr_number]:
        missing_vars = [var_name for var_name, var in zip(["app_id", "branch_name", "build_id", "pr_number"], [app_id, branch_name, build_id, pr_number]) if var is None]
        raise ValueError(f"Missing required information: {', '.join(missing_vars)}")

    return app_id, branch_name, build_id, pr_number


def get_build_logs_url(client, app_id, branch_name, build_id):
    response = client.get_job(appId=app_id, branchName=branch_name, jobId=build_id)
    return response['job']['steps'][0]['logUrl']


def post_comment_to_github(pr_number, logs):
    github_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues/{pr_number}/comments"
    token = os.environ['GITHUB_TOKEN']
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    data = {"body": f"Amplify preview build failed. Logs:\n```\n{logs} \n```"}
    data = json.dumps(data).encode('utf-8')

    req = request.Request(github_url, data=data, headers=headers, method='POST')
    request.urlopen(req)