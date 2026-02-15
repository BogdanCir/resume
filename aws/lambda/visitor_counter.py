import json
import boto3

table = boto3.resource("dynamodb").Table("bogdan-resume-visitors")

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
