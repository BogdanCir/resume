import json
import boto3
import os

# verificam daca exista env in Docker
endpoint = os.getenv("DYNAMODB_ENDPOINT_URL")
if endpoint:
    # in Docker
    dynamodb = boto3.resource("dynamodb", endpoint_url=endpoint)
else:
    # in AWS
    dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table("bogdan-resume-visitors")

# table = boto3.resource("dynamodb").Table("bogdan-resume-visitors")

def lambda_handler(event, context):
    # Get current views, add 1, save it back
    views = table.get_item(Key={"id": "main"})["Item"]["views"]
    views = views + 1
    table.put_item(Item={"id": "main", "views": views})

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"count": int(views)})
    }
