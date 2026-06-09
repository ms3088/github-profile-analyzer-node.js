# GitHub Profile Analyzer API

## Tech Stack
- Node.js
- Express.js
- MySQL
- GitHub API

## Setup Instructions

### 1. Clone repo
git clone https://github.com/ms3088/github-profile-analyzer-node.js.git

### 2. Switch branch
git checkout ms3088

### 3. Install dependencies
npm install,
npm install express mysql2 axios dotenv cors,
Development Dependencies:npm install -D nodemon

### 4. Setup environment
Create .env file:

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=your_password  
DB_NAME=github_analyzer  
PORT=3000  

### 5. API Records
File inside:
postman/REST API basics- CRUD, test & variable.postman_collection.json

### 6. Run project
npm start

Server runs on:
http://localhost:3000

## API Endpoints

- POST /api/profiles/analyze/:username
- GET /api/profiles
- GET /api/profiles/:username
