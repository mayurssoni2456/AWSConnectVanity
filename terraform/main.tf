terraform {
    backend "s3" {
     bucket = "awsconnectappbucket"
     key    = "terraform.tfstate"
     region = "us-east-1"
   }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_lambda_function" "generate_vanity_numbers" {
  function_name    = "GenerateVanityNumbers"
  runtime          = "nodejs16.x"
  handler          = "dist/index.handler"
  filename         = "../awsconnectapp.zip"
  source_code_hash = filebase64("../awsconnectapp.zip")
  role             = aws_iam_role.lambda_exec_role.arn

  environment {
    variables = {
      DYNAMODB_TABLE = aws_dynamodb_table.vanify_numbers.name
    }    
  }
}

resource "aws_iam_role" "lambda_exec_role" {
  name = "LambdaExecutionRole"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_policy" "dynamodb_full_access_policy" {
  name        = "DynamoDBFullAccessPolicy"
  description = "Policy for full access to DynamoDB"
  
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "dynamodb:*",
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "attach_dynamodb_policy" {
  policy_arn = aws_iam_policy.dynamodb_full_access_policy.arn
  role       = aws_iam_role.lambda_exec_role.name
}


resource "aws_dynamodb_table" "vanify_numbers" {
  name           = "VanifyNumbers"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "phoneNumber"
  attribute {
    name = "phoneNumber"
    type = "S"
  }
}
