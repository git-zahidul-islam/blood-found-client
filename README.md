# Blood Found

Blood Found is a blood donation website where registered users can request blood and donate blood. It includes an admin dashboard with full admin functionality.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User Authentication (Login/Signup)
- Post Requests for Blood
- Donate Blood
- Admin Dashboard
  - Manage Users
  - Manage Blood Requests
  - View Donation History
- Volountineer 
  - make post
  - status change

## Technology Stack
- **Frontend:**
  - React.js
  - Tailwind CSS
  - Daisy UI
  - Meraki UI
- **Backend:**
  - Express.js
  - Firebase (Authentication)
- **Database:**
  - MongoDB

## Installation
### Frontend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blood-found.git
    ```
2. Navigate to the project directory:
    ```bash
    cd blood-found
    ```
3. Install backend dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    ```
5. Start the backend server:
    ```bash
    npm run dev
    ```

### Backend Setup
1. Navigate to the client directory:
    ```bash
    cd client
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    nodemon index.js
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` for the frontend.
2. Register or login to your account.
3. As a user, you can request blood and view donation opportunities.
4. As an admin, you can access the admin dashboard to manage the platform. if you access messages 
    [zahidulislam.here@gmail.com]

# Live link: https://blood-found-513a1.web.app 

## Server github
### link: https://github.com/git-zahidul-islam/blood-found-server
