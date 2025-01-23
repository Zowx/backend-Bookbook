import express from 'express';
import cors from 'cors'; // Importer cors
import authRoutes from './src/routes/authRoutes.js';
import bookRoutes from './src/routes/bookRoutes.js';

const app = express();

// Configuration de CORS
app.use(cors({
  origin: '*', // Remplacez '*' par l'origine spécifique si vous voulez restreindre l'accès (par exemple, http://localhost:3000)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers autorisés
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', authRoutes);
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.json('Hello, World!');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});