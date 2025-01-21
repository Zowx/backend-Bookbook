import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Ajout des routes pour l'authentification
app.use('/api/users', authRoutes);

// Point d'entrée principal
app.get('/', (req, res) => {
  res.send('Server is running');
});

module.exports = app;
