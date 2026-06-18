# Task Manager Frontend

## Project Overview

Task Manager Frontend is a React.js application developed as part of the internship program. The application allows users to manage tasks through a user-friendly interface and provides authentication using JWT-based login and registration.

---

# Technologies Used

* React.js
* Vite
* Axios
* React Router DOM
* JavaScript
* HTML5
* CSS3

---

# Project Structure

src/
│
├── components/
│ ├── TaskForm.jsx
│ ├── TaskList.jsx
│ └── ProtectedRoute.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ └── Register.jsx
│
├── services/
│ └── api.js
│
├── App.jsx
└── main.jsx

---

# Task 1: Backend CRUD API Integration

## Objective

Integrate frontend with backend REST APIs for task management.

## Features

* Fetch tasks from backend
* Display task list
* Update task status
* Delete tasks
* Real-time data synchronization

## API Endpoints Used

GET /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

## Code Snippet

```javascript
const response = await API.get("/tasks");
setTasks(response.data);
```

## Screenshot

Screenshot 1: Task List Display

(Add Screenshot Here)

---

# Task 2: React Frontend CRUD Interface

## Objective

Build a complete React frontend for task management.

## Features

* Add new task
* View all tasks
* Update task status
* Delete task
* Form validation

## Components Created

### TaskForm.jsx

Responsible for creating new tasks.

### TaskList.jsx

Responsible for displaying all tasks.

### Home.jsx

Main dashboard page.

## Add Task Example

```javascript
await API.post("/tasks", task);
```

## Screenshot

Screenshot 2: Add Task Form

(Add Screenshot Here)

Screenshot 3: Task Added Successfully

(Add Screenshot Here)

Screenshot 4: Task Status Updated

(Add Screenshot Here)

Screenshot 5: Task Deleted

(Add Screenshot Here)

---

# Task 3: JWT Authentication & Protected Routes

## Objective

Implement secure user authentication using JWT.

## Features

* User Registration
* User Login
* Password Hashing (bcrypt)
* JWT Token Storage
* Protected Routes
* Logout Functionality

---

## Registration Flow

User enters:

* Name
* Email
* Password

Frontend sends:

POST /api/auth/register

Example:

```javascript
await API.post("/auth/register", {
  name,
  email,
  password,
});
```

### Screenshot

Screenshot 6: Registration Page

(Add Screenshot Here)

Screenshot 7: Registration Successful

(Add Screenshot Here)

---

## Login Flow

User enters:

* Email
* Password

Frontend sends:

POST /api/auth/login

Example:

```javascript
const res = await API.post("/auth/login", {
  email,
  password,
});

localStorage.setItem(
  "token",
  res.data.token
);
```

### Screenshot

Screenshot 8: Login Page

(Add Screenshot Here)

Screenshot 9: Login Successful

(Add Screenshot Here)

---

## Protected Route

Only authenticated users can access the dashboard.

```javascript
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  return token
    ? children
    : <Navigate to="/login" />;
}
```

### Screenshot

Screenshot 10: Protected Route Redirect

(Add Screenshot Here)

---

## Logout Functionality

```javascript
const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
```

### Screenshot

Screenshot 11: Logout Functionality

(Add Screenshot Here)

---

# Installation Steps

## Clone Repository

```bash
git clone https://github.com/Navijith/task-manager-frontend.git
```

## Navigate to Project

```bash
cd task-manager-frontend
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Application runs at:

http://localhost:5173

---

# Commands Used

## Install React Router

```bash
npm install react-router-dom
```

## Install Axios

```bash
npm install axios
```

## Git Commands

```bash
git init

git add .

git commit -m "Task completed"

git branch -M main

git remote add origin https://github.com/Navijith/task-manager-frontend.git

git push -u origin main
```

---

# GitHub Repository

Frontend Repository:

https://github.com/Navijith/task-manager-frontend

Backend Repository:

https://github.com/Navijith/task-manager-api

---

# Security Features

* JWT Authentication
* Protected Routes
* Password Hashing using bcrypt
* Token-based Session Management
* Secure API Communication

---

# Outcome

Successfully developed a Task Manager application with:

* Complete CRUD Operations
* React Frontend
* JWT Authentication
* Protected Routes
* MongoDB Integration
* REST API Communication

The application provides a secure and responsive task management experience.
