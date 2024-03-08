# AWS Lambda Function for Handling Amplify Preview Build Failures
This AWS Lambda function automates the response to failed build notifications from the AWS Amplify Console. Upon detecting a build failure message via an SNS event, it extracts relevant information about the failed build, retrieves the build logs, and posts a comment with these logs on the associated GitHub pull request.

## Functionality
- Detects failed build notifications from AWS Amplify Console.
- Extracts build details such as app ID, branch name, build ID, and PR number.
- Retrieves the build logs from AWS Amplify.
- Posts the build logs to the corresponding GitHub pull request.