# Task Manager Frontend

A React-based Task Management Application developed as part of the Alfido Tech Internship Program. The application allows users to manage tasks efficiently with authentication, protected routes, and CRUD functionality.

## Tech Stack

* React.js
* React Router DOM
* Axios
* Vite
* JavaScript (ES6+)
* CSS

---

# Task 1: Frontend Project Setup

## Objective

Set up the React frontend application and establish communication with the backend API.

## Features Implemented

* Created React application using Vite
* Configured project structure
* Installed required dependencies
* Configured Axios for API communication
* Created reusable components
* Connected frontend to backend server

## Files Created

* src/services/api.js
* src/components/
* src/pages/
* App.jsx
* main.jsx

## Outcome

Successfully established communication between React frontend and Express backend.

---

# Task 2: Task Management CRUD Interface

## Objective

Develop a complete user interface for managing tasks.

## Features Implemented

### Create Task

* Add new task
* Enter title
* Enter description
* Select task status

### Read Tasks

* Display all tasks from MongoDB
* Fetch tasks using API

### Update Tasks

* Mark tasks as completed
* Update task status dynamically

### Delete Tasks

* Remove tasks from database
* Refresh task list automatically

## Components Developed

### TaskForm Component

Responsibilities:

* Capture task details
* Submit task data
* Validate user input

### TaskList Component

Responsibilities:

* Display all tasks
* Update task status
* Delete tasks

### Home Page

Responsibilities:

* Render TaskForm
* Render TaskList

## Outcome

Successfully implemented full CRUD operations through the frontend interface.

---

# Task 3: Authentication & Protected Routes

## Objective

Implement secure user authentication using JWT and protect application routes.

## Features Implemented

### User Registration

* Create new user account
* Send registration data to backend
* Validate form inputs

### User Login

* Authenticate users
* Receive JWT token from backend
* Store token in localStorage

### Protected Routes

* Restrict access to authenticated users only
* Redirect unauthenticated users to login page

### Logout

* Remove JWT token
* Redirect to login page

## Pages Developed

### Register Page

Features:

* Name input
* Email input
* Password input
* Registration request

### Login Page

Features:

* Email input
* Password input
* JWT authentication

### ProtectedRoute Component

Responsibilities:

* Check authentication token
* Allow access to protected pages
* Redirect unauthorized users

## Authentication Flow

1. User registers
2. User logs in
3. Backend generates JWT token
4. Token stored in localStorage
5. Protected routes verify token existence
6. User accesses dashboard
7. Logout removes token

## Security Features

* JWT Authentication
* Protected Routes
* Secure API Requests
* Session Management
* Local Storage Token Management

## Outcome

Successfully implemented complete authentication system with route protection and logout functionality.

---

# Project Structure

src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Register.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx

---

# Installation

Clone Repository

git clone https://github.com/Navijith/task-manager-frontend.git

Install Dependencies

npm install

Start Development Server

npm run dev

Frontend URL

http://localhost:5173

---

# Author

Navijith JR

Alfido Tech Internship Project
