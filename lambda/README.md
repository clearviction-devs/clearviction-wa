# AWS Lambda Functions
## Overview
This directory houses our AWS Lambda functions, with each subdirectory representing a separate Lambda function.

## Structure
- **/contact_form**: Contains the AWS Lambda function for handling email sending via a contact form.
- Other directories: Other Lambda functions can be structured similarly in their own directories.

## Prerequisites
- An AWS account with access to Lambda and related services.
- Python 3.x environment for local development and testing.
- AWS CLI installed and configured with appropriate access.

## Setup

It's recommended to use a virtual environment:
```
python -m venv .venv
source .venv/bin/activate  # On Unix or MacOS
.venv\Scripts\activate     # On Windows
```

Install required packages:
```
pip3 install -r requirements.txt
```

## Local Testing
To run unit tests, run command `python3 -m unittest [LambdaFunctionName]/tests/[testfile.py]`, ex:
```
python3 -m unittest contact_form/tests/test_contact_form_handler.py
```

## Deployment

### 1. Installing the AWS CLI

For Windows, you can download and run the AWS CLI MSI installer from the AWS CLI website.
For macOS and Linux:
```
pip install awscli
```

### 2. Configuring the AWS CLI with Appropriate Access
```
aws configure
```
This command will prompt you to enter four pieces of information.

- **AWS Access Key ID**: This is part of your security credentials that you can generate in the AWS IAM (Identity and Access Management) console.
- **AWS Secret Access Key**: This is also generated in the IAM console and should be kept confidential.
- **Default region name**: This is the AWS region where your resources are located or where you plan to deploy services. For example, us-west-2.
- **Default output format**: This is the format in which the results are displayed. Common formats are json, yaml, text. You can leave it blank for the default (json).

### 3. Deploying the Lambda Function
```
zip -r function.zip [function_directory]
aws lambda update-function-code --function-name [LambdaFunctionName] --zip-file file://function.zip
```