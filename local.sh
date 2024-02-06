
cd terraform
sam build --hook-name terraform --beta-features
sam local invoke aws_lambda_function.generate_vanity_numbers -e ../event.json --beta-features
