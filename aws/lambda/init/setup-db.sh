#!/bin/bash
awslocal dynamodb create-table \
  --table-name bogdan-resume-visitors \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region eu-north-1

awslocal dynamodb put-item \
  --table-name bogdan-resume-visitors \
  --item '{"id": {"S": "main"}, "views": {"N": "0"}}' \
  --region eu-north-1