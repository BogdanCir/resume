A personal resume website built with React + Vite and deployed using a fully serverless AWS architecture.

Live: https://resume.bogdan-circiu.com

## Architecture Overview

The application is deployed using:

- **Frontend**
  - React + Vite
  - Static assets stored in private Amazon S3
  - Distributed globally via CloudFront (with Origin Access Control)
  - DNS & SSL managed with Route 53 and ACM

- **Backend (Visitor Counter API)**
  - API Gateway
  - AWS Lambda (python)
  - DynamoDB (visitor count storage)

- **CI/CD**
  - GitHub Actions
  - Automated build & deploy to S3
  - Automatic CloudFront cache invalidation


## Architecture Diagram

<img width="1632" height="472" alt="diagram-export-2-16-2026-3_12_04-AM" src="https://github.com/user-attachments/assets/ab399e46-a1a9-4588-be00-f0743d6bf36a" />



## Security

- S3 bucket is private
- Access controlled via CloudFront Origin Access Control (OAC)
- HTTPS enforced via ACM SSL certificate
- IAM least-privilege permissions for deployment
  


## Tech Stack

**Frontend**
- React + Vite
- TailwindCSS

**Cloud / Backend**
- AWS S3
- CloudFront
- Route 53
- ACM
- API Gateway
- AWS Lambda
- DynamoDB
- IAM
