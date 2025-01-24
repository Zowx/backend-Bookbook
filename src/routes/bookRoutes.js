import express from 'express';
import { bookController } from '../controllers/bookController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Routes publiques
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);

// Routes protégées (nécessitent une authentification)
router.post('/books', authenticate, bookController.createBook);
router.put('/books/:id', authenticate, bookController.updateBook);
router.delete('/books/:id', authenticate, bookController.deleteBook);

export default router;