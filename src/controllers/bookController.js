import { bookService } from '../services/bookService.js';

export const bookController = {
  async getAllBooks(req, res) {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getBookById(req, res) {
    try {
      const book = await bookService.getBookById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createBook(req, res) {
    try {
      const book = await bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateBook(req, res) {
    try {
      const book = await bookService.updateBook(req.params.id, req.body);
      if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteBook(req, res) {
    try {
      const deleted = await bookService.deleteBook(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Livre non trouvé' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};