#!/bin/bash

# Install dependencies
echo "Installing npm dependencies..."
npm run install-deps

# Build TypeScript code
echo "Building..."
npm run build

# copy node_modules to dist
echo "copying node_modules to dist..."
npm run copy

echo "delete .js.map files..."
find . -type f -name "*.js.map" -exec rm {} \;

# Zip the build artifacts
echo "Zip the artifacts..."
npm run zip

# Deploy infrastructure using Terraform
echo "Deploy..."
cd terraform
terraform init
terraform apply -auto-approve
echo "Deployment completed successfully."
