<img width="1257" height="681" alt="Screenshot 2026-06-18 102331" src="https://github.com/user-attachments/assets/e640759e-58b6-4a00-ac08-de60d51f7551" /># Task Manager Frontend

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

<img width="897" height="817" alt="Screenshot 2026-06-18 102410" src="https://github.com/user-attachments/assets/817cac95-be16-40a7-8db3-46b0129b6f18" />


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

<img width="657" height="912" alt="Screenshot 2026-06-18 110048" src="https://github.com/user-attachments/assets/d0ce6608-ee0c-4012-95e0-7935647f3c25" />



Screenshot 3: Task Added Successfully

<img width="1257" height="681" alt="Screenshot 2026-06-18 102331" src="https://github.com/user-attachments/assets/eb2f9db1-fc76-4816-867d-b2c70450a7d9" />


Screenshot 4: Task Status Updated

(Add Screenshot Here)

Screenshot 5: Task Deleted

<img width="603" height="915" alt="Screenshot 2026-06-18 110150" src="https://github.com/user-attachments/assets/0773df3f-cbcd-4353-ad0a-d9ba3d549e98" />


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

<img width="746" height="484" alt="Screenshot 2026-06-18 102112" src="https://github.com/user-attachments/assets/fbda28b2-1cfb-403c-b44c-16cfc87ed750" />


Screenshot 7: Registration Successful

<img width="1267" height="618" alt="Screenshot 2026-06-18 102132" src="https://github.com/user-attachments/assets/e842d2a3-2613-453c-ab38-eafd74af0df6" />


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

<img width="514" height="409" alt="Screenshot 2026-06-18 102240" src="https://github.com/user-attachments/assets/143e336d-c9af-46d0-a8d8-f43d54c6c2fc" />


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

<img width="791" height="617" alt="Screenshot 2026-06-18 110411" src="https://github.com/user-attachments/assets/0278d761-3371-45c8-af8e-0a90e4007365" />


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

<img width="854" height="418" alt="image" src="https://github.com/user-attachments/assets/f792f8fe-590c-456e-b827-bc81c2da23f0" />


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
