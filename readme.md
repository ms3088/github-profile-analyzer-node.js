# GitHub Profile Analyzer API

## Tech Stack
- Node.js
- Express.js
- MySQL
- GitHub API

## Setup Instructions

### 1. Clone repo
git clone https://github.com/YOUR_USERNAME/github-profile-analyzer.git

### 2. Switch branch
git checkout ms3088

### 3. Install dependencies
npm install

### 4. Setup environment
Create .env file:

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=your_password  
DB_NAME=github_analyzer  
PORT=3000  

### 5. Import database
Import file inside:
database/github_analyzer.sql

### 6. Run project
npm start

Server runs on:
http://localhost:3000

## API Endpoints

- POST /api/profiles/analyze/:username
- GET /api/profiles
- GET /api/profiles/:username