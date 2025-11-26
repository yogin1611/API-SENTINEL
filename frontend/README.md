<p align="center">

  <!-- Project Status -->
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" />

  <!-- Tech Stack -->
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/Database-SQLite-lightgrey?style=for-the-badge&logo=sqlite" />
  <img src="https://img.shields.io/badge/ORM-Sequelize-blue?style=for-the-badge&logo=sequelize" />

  <!-- Hosting (optional for later) -->
  <img src="https://img.shields.io/badge/Hosting-Render-purple?style=for-the-badge&logo=render" />
  <img src="https://img.shields.io/badge/Frontend-Netlify-teal?style=for-the-badge&logo=netlify" />

  <!-- Tools -->
  <img src="https://img.shields.io/badge/Version_Control-Git-orange?style=for-the-badge&logo=git" />
  <img src="https://img.shields.io/badge/IDE-VSCode-blue?style=for-the-badge&logo=visualstudiocode" />

</p>


# 📘 API Sentinel — Full Stack Authentication & Task Manager

A secure and scalable full-stack project built with:

- **Node.js + Express**
- **JWT Authentication**
- **SQLite + Sequelize ORM**
- **React.js Frontend**
- **Protected Routes**
- **Full CRUD for Tasks**
- **Role-Based Access (User/Admin)**

---

## 🚀 Features

### 🔐 Authentication
- Register & Login
- Password hashing with bcrypt
- JWT-based authentication
- Role-based authorization (user/admin)

### 🧩 Backend
- REST API (Express)
- Sequelize ORM
- SQLite database
- Input validation
- Middleware for auth & roles
- Clean folder structure
- Swagger/Postman API documentation

### 🖥️ Frontend
- React.js
- Login / Register pages
- Protected Routes (React Router)
- Dashboard with logout
- Task Manager:
  - Create
  - Read
  - Update
  - Delete

### 🧱 Security
- JWT-secured routes
- No sensitive data exposed
- `.env` environment variable support

---

## 📂 Project Structure

API-SENTINEL/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── utils/
│ │ ├── app.js
│ │ └── server.js
│ ├── database.sqlite
│ ├── package.json
│ └── .env (ignored by Git)
│
└── frontend/
├── src/
├── public/
├── package.json
└── README.md


---

## ⚙️ Backend Setup

### 1️⃣ Navigate to backend folder:
```bash
cd backend

Install backend dependencies:
npm install

Create .env file:
PORT=4000
JWT_SECRET=your_super_secret_key


Run backend:
npm run dev

Backend runs at:
http://localhost:4000

🖥️ Frontend Setup
1️⃣ Navigate to frontend:
cd frontend

2️⃣ Install dependencies:
npm install

3️⃣ Run frontend:
npm start


Frontend runs at:

http://localhost:3000

🔗 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/v1/auth/register	Register user
POST	/api/v1/auth/login	Login user & get JWT
Task Routes
Method	Endpoint	Description
GET	/api/v1/tasks	Get all tasks
POST	/api/v1/tasks	Create a task
PATCH	/api/v1/tasks/:id	Update task
DELETE	/api/v1/tasks/:id	Delete task
🖼️ Frontend Pages

/register → User signup

/login → User login

/dashboard → User dashboard

/tasks → Full Task Manager (CRUD)

📦 Scalability Notes

This project is built with scalability in mind:

Supports Microservices architecture

Easy DB migration (SQLite → PostgreSQL)

Optional Redis caching support

Docker-ready architecture

Horizontal scaling via load balancers (NGINX)

Logging with Morgan / Winston (optional)

CI/CD capable structure

🤝 Contributions

Pull requests, issues, and feature suggestions are welcome!

📜 License

MIT License © 2025