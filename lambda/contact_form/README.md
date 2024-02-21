# Contact Form Submission Architecture
## Overview
This document describes the architecture and flow of a dynamic contact form hosted on a static S3 website. The system utilizes AWS services including Amazon Simple Storage Service (S3), AWS Lambda, Amazon API Gateway, and Amazon Simple Email Service (SES) to process contact form submissions and send emails.
## Components
### Amazon API Gateway: 

Provides a RESTful endpoint for the frontend to submit form data. Client sends POST request to API Gateway endpoint, which forwards the request to the “contact-form” Lambda.

The endpoint is CORS (Cross Origin Resource Sharing) enabled. CORS is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. In our case, a POST request is made from domain clearviction.org to our API gateway endpoint.

The endpoint is configured for two methods, OPTIONS and POST.

**OPTIONS Method:** This is used for the CORS preflight request. When a browser detects a cross-origin request (like a POST request from our frontend to our API), it first sends an OPTIONS request to the server hosting the API. This preflight request checks whether the actual request (POST in this case) is safe to send. The server must respond with appropriate CORS headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers) to pass this preflight check.

**POST Method:** After the preflight check passes, the browser sends the actual POST request. This request also needs CORS headers in the response to be accepted by the browser. If your API's POST response does not include the Access-Control-Allow-Origin header, the browser will block the response, and your frontend won't be able to process it.

The endpoint is currently configured to have low rate limits (100 rps throughput, 50 rps burst), since we do not anticipate much traffic on the form.
### Amazon Simple Email Service (SES)
Manages sending emails. It's used by the Lambda function to send the form data as an email to info@cv. If you wish to send emails to a different address, you must add it as a verified identity in SES.
### AWS Lambda
The AWS Lambda function “contact-form” is designed to handle events (HTTP requests from API Gateway). The lambda_handler function receives an event (contents of the HTTP request) containing the information from the contact form submission. The information is extracted from the request body and formatted into an email message which is then forwarded to info@cv via SES. The lambda function then returns an HTTP response with statusCode 200, indicating success, and HTTP headers specifying the content type as JSON and setting Access-Control-Allow-Origin to * (allowing the response to be shared with any origin, used in CORS). The body of the response is a JSON string representing a simple success message.
### AWS Identity and Access Management (IAM)
The lambda function is configured to use the IAM role “contact-form-role”, which is configured to allow the SES SendEmail action and allow writing to CloudWatch logs.
## Overall Workflow
	- The user fills out the contact form on clearviction.org and submits it.
	- The form submission is sent to API Gateway endpoint.
	- The API Gateway is configured to trigger the AWS Lambda function “contact-form” upon receiving a request.
	- AWS Lambda executes the lambda_handler function in response to the API Gateway trigger.
	- The function extracts the form data from the event object that API Gateway passes.
	- It then constructs an email with the form data and uses Amazon SES to send it to info@cv
	- After processing the form submission, the Lambda function sends a response back to API Gateway.
	- The API Gateway then forwards this response to the frontend.
	- The user sees a confirmation message on the website indicating the successful submission of the form (or an error message if something went wrong).
## Making Changes
Before deploying any changes to the production lambda, it’s important to run both unit and end-to-end tests.

1. Add any appropriate unit tests and ensure no existing unit tests are broken. Find commands to run the existing unit tests in the lambda directory README.
2. Deploy the function code to contact-form-test using the instructions found in the lambda directory README.
3. After the changes have deployed, curl the staging API endpoint using a command of the form below and ensure an email is sent correctly to info@cv.
```
curl -H "Content-Type: application/json" 
-X POST -d '{"name":"test","__replyto":"test", "contact_type": "test", "message": "test"}'https://gv6n06a4h2.execute-api.us-west-2.amazonaws.com/staging
```