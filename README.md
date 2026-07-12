# AssetFlow-Enterprise-Asset---Resource-Management-System 
AssetFlow Enterprise Asset &amp; Resource Management System.
# 📦 AssetFlow – Asset Management System

## Overview
AssetFlow is a full-stack web application designed to manage organizational assets efficiently. It allows administrators to handle departments, employees, asset allocation, maintenance, and reporting in a structured way.

---

## Features

### Organization Setup
- Department Management
- Asset Category Management
- Employee Directory

### Asset Management
- Add / Update / Delete Assets
- Track asset status

### Allocation & Transfer
- Assign assets to employees
- Transfer assets between departments

### Maintenance
- Log maintenance requests
- Track asset servicing

### Reports & Analytics
- Asset usage reports
- Department-wise analysis

### Activity & Notifications
- Track system activities
- Alerts for updates

---

## Tech Stack

### Frontend
- React (Vite)
- CSS / Bootstrap (or Tailwind if used)

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Tools
- Nodemon
- Axios / Fetch API

---

## Project Structure

assetflow/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── config/
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── package.json
│
└── README.md

---

## Installation & Setup

###  Clone the Repository
git clone https://github.com/your-username/assetflow.git
cd assetflow

---

###  Setup Backend
cd backend
npm install
npm run dev

Backend runs on:
http://localhost:5000

---

###  Setup Frontend
(Open a new terminal)

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

## Environment Variables

Create a `.env` file in the backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000

---

## Usage

1. Start backend and frontend servers
2. Open browser → http://localhost:5173
3. Setup:
   - Departments
   - Employees
   - Asset Categories
4. Start managing assets

---

## Future Improvements

- Authentication (JWT)
- Role-based access control
- Dashboard analytics charts
- Email notifications
- Mobile responsiveness

---

## Contributing

fork → clone → create branch → commit → push → pull request

---

## License
This project is licensed under the MIT License.

---

## Authors
Sahil Vishwakarma  
B.Tech CSE Student
Shikhar gupta 
B.Tech CSE Student
Suryajeet vishwakarma
B.Tech CSE Student
Prashant yadav
B.Tech CSE Student

