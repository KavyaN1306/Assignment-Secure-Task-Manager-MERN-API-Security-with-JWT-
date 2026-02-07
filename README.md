# Task Manager API with JWT Authentication

## Setup Instructions
1. Install dependencies
npm install

2. Start MongoDB

3. Run server
node server.js

## Features
- User registration
- User login
- Password hashing using bcrypt
- JWT authentication
- Protected task routes
- Tasks belong to logged-in user

## API Endpoints

### Auth
POST /api/auth/register
POST /api/auth/login

### Tasks
POST /api/tasks
GET /api/tasks

## Authentication
JWT token must be sent in the Authorization header.
