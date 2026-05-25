# Full Stack Todo Application

## Project Overview

The Full Stack Todo Application is a modern task management web application developed using React.js, Node.js, Express.js, and MySQL. The application enables users to create, update, complete, and delete tasks through an interactive and responsive user interface.

The project demonstrates complete frontend-backend integration with REST API communication and persistent database storage.

---

# Objectives

* Develop a responsive frontend using React.js
* Create RESTful APIs using Express.js
* Integrate MySQL database for permanent data storage
* Implement CRUD operations
* Design an interactive and visually appealing user interface
* Build a real-world full stack web application

---

# Technologies Used

## Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Axios

## Backend

* Node.js
* Express.js

## Database

* MySQL

## Development Tools

* IntelliJ IDEA
* MySQL Workbench
* Git
* GitHub

---

# Project Architecture

```
React Frontend
       ↓
Express Backend API
       ↓
MySQL Database
```

---

# Folder Structure

```
todo-fullstack/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│
└── backend/
    ├── server.js
    ├── db.js
    ├── package.json
```

---

# Features

## Task Management

* Add new tasks
* Delete tasks
* Mark tasks as completed
* View all tasks dynamically

## Persistent Storage

All tasks are stored permanently in MySQL database and remain available even after refreshing or reopening the application.

## Progress Tracking

The application includes a dynamic progress bar that displays:

* Total tasks
* Completed tasks
* Completion percentage

## Dark Mode

Users can switch between light mode and dark mode for better accessibility and user experience.

## Responsive User Interface

The application is fully responsive and optimized for different screen sizes.

## Animated Completion Effect

When a task is marked as completed:

* The task glows visually
* A completion animation appears
* A completion message is displayed

---

# Unique Features

## 1. Animated Task Completion System

Unlike basic todo applications, completed tasks display glow effects and smooth animations that improve user interaction and visual feedback.

## 2. Dynamic Progress Monitoring

The application automatically calculates and displays real-time task completion statistics using a progress tracking bar.

## 3. Dark Mode Integration

A built-in dark mode allows users to switch themes dynamically without reloading the application.

## 4. Full Stack CRUD Functionality

The application performs complete CRUD operations using REST APIs connected to a MySQL database.

---

# API Endpoints

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/todos`     | Retrieve all tasks     |
| POST   | `/api/todos`     | Add a new task         |
| PUT    | `/api/todos/:id` | Update task completion |
| DELETE | `/api/todos/:id` | Delete a task          |

---

# Database Design

## Database Name

```sql
todo_app
```

## Table Name

```sql
todos
```

## Table Structure

| Column Name | Data Type    |
| ----------- | ------------ |
| id          | INT          |
| task        | VARCHAR(255) |
| completed   | BOOLEAN      |

---

# Setup Instructions

## Step 1: Clone Repository

```bash
git clone https://github.com/anuvardhini25/todo-fullstack.git
```

---

# Step 2: Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Step 3: Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

# Step 4: MySQL Database Setup

Create database:

```sql
CREATE DATABASE todo_app;
```

Use database:

```sql
USE todo_app;
```

Create table:

```sql
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE
);
```

---

# Working Procedure

1. The user enters a task in the frontend interface.
2. React sends API requests to the Express backend.
3. The backend processes requests and interacts with MySQL database.
4. Task data is stored and retrieved dynamically.
5. Updated information is displayed instantly in the frontend.

---

# Learning Outcomes

This project helped in understanding:

* React component development
* State management in React
* REST API development
* Express.js server implementation
* MySQL database integration
* CRUD operations
* Frontend-backend communication
* Responsive UI development
* Git and GitHub version control

---

# Future Enhancements

* User authentication system
* Task deadlines and reminders
* Search and filter functionality
* Cloud deployment
* Mobile application support
* Voice-based task creation
* AI-based task suggestions

---

# Conclusion

The Full Stack Todo Application successfully demonstrates the integration of frontend, backend, and database technologies in a real-world web application. The project combines functional task management features with an interactive user experience and persistent data handling, making it a strong portfolio-ready full stack development project.

---

# Developed By

Anuvardhini T
