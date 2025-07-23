const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

// Importar los datos JSON
const aboutData = require('../../data/about.json');
const servicesData = require('../../data/services.json');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware de autenticación
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Token de acceso requerido' });
  }

  if (token !== 'ciisa') {
    return res.status(403).json({ error: 'Token inválido' });
  }

  next();
};

// Ruta base
app.get('/api', (req, res) => {
  res.json({ 
    message: 'API IPSS Evaluaciones funcionando correctamente',
    endpoints: [
      '/api/Evaluacion1/about',
      '/api/Evaluacion1/services'
    ]
  });
});

// Endpoint para about (protegido)
app.get('/api/Evaluacion1/about', authenticateToken, (req, res) => {
  try {
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de about' });
  }
});

// Endpoint para services (protegido)
app.get('/api/Evaluacion1/services', authenticateToken, (req, res) => {
  try {
    res.json(servicesData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de services' });
  }
});

// Manejar rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' });
});

module.exports.handler = serverless(app);
