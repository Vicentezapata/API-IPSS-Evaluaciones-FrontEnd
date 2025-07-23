const express = require('express');
const cors = require('cors');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Puertos comunes de React
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token']
};

app.use(cors(corsOptions));

// ...existing code...