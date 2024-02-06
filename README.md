# AWS Connect Project
Give a phone number, backend will generate multiple vanify numbers and provide this as an option to the caller.

* typescript
* jest
* AWS - AWS Connect, lambda, dynamodb,etc
* Terraform - IAC

# In progress
    1. Infrastructure creation 
        AWSConnect related infra
        Lambda
        DynamoDB
        IAM Role
        S3 Bucket
    
    2. Application Code
        Currently, It contains very basic logic to generate vanify Numbers
            Default Algorithm and Custom Algorithms are implemented (basic just to give the idea)
        
        Storing the vanify numbers in dynamodb 
    
    3. Basic 1 test case
    
    3. Deployment script
        deploy.sh 

    4. running locally
        local.sh         

# other pending task & scope of improvments
 - Logger, code cleanup, etc.
 - terraform modularize 

# How to run 

1. Configure AWS credentials and execute sh deploy.sh - This will create the necessary infra on aws cloud        
2. To run locally sh local.sh    

# code structure 
    1. index.ts - Entry point (Router)
    2. AppyService - This is facade of the application service
    3. VanifyService - This will hold instance of VanifyAlgo, Repository,etc.
    4. VanifyRepository - Table Model
    5. VanifySchema - Table Schema
    6. VanifyEnity - attributes

