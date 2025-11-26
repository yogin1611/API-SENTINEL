// Load env first
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// CORS (Production safe)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://api-sentinel-seven.vercel.apps"  // <-- correct Vercel origin
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());

// Swagger Setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Sentinel",
      version: "1.0.0",
      description: "REST API with JWT Auth & CRUD"
    },
    servers: [
      { url: "http://localhost:4000" },
      { url: "https://api-sentinel-muqc.onrender.com/" }  // (optional)
    ]
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

// Default
app.get('/', (req, res) => {
  res.json({ message: "API Sentinel backend is running 🚀" });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

module.exports = app;
