# Hardware Guide Serverless

**Hardware Guide Serverless** is a serverless application built with serverless framework, designed to help users find the perfect PC configuration based on their needs. Simply input a request like "I need a PC for video editing," and the system will return a list with three recommended computer setups.

## Overview

The **Hardware Guide Serverless** application utilizes Natural Language Processing (NLP) to interpret user requests and suggest suitable PC configurations. Whether you're looking for a machine for gaming, video editing, or general use, this application will provide you with three tailored options to choose from.

## Features

- **NLP-Based Requests:** Users can request PC specifications in natural language.
- **Scalability:** The application runs on AWS Lambda that scale automatically.

# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

### Test locally

- The project uses Serverless-offline that allows you to run Serverless Architecture Locally.
- Run `yarn dev` to start development server.
