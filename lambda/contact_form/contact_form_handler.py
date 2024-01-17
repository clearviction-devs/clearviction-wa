import boto3
import json

ses = boto3.client('ses', region_name='us-west-2')

SENDER = 'info@clearviction.org'
RECEIVER = 'info@clearviction.org'

def lambda_handler(event, context):
    send_email(event)
    response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "isBase64Encoded": False,
        "body": json.dumps({"result": "Success"})
    }
    return response

def send_email(event):
    try:
        params = {
            'Destination': {
                'ToAddresses': [RECEIVER]
            },
            'Message': {
                'Body': {
                    'Text': {
                        'Data': 'Name: ' + event['name'] + '\nEmail: ' + event['email'] + '\nContact Type: ' + event['contact_type'] + '\nMessage: ' + event['message'],
                        'Charset': 'UTF-8'
                    }
                },
                'Subject': {
                    'Data': 'Website Contact Form: ' + event['name'],
                    'Charset': 'UTF-8'
                }
            },
            'Source': SENDER
        }
        ses.send_email(**params)
    except Exception as e:
        print("Error sending email: ", e)
        raise e