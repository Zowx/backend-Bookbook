import supabase from '../db.js';

export const bookService = {
  async getAllBooks() {
    const { data, error } = await supabase
      .from('books')
      .select('*');

    if (error) throw error;
    return data;
  },

  async getBookById(id) {
    const { data, error } = await supabase
      .from('books')
      .select('*, comments(*), reservations(*)')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createBook(bookData) {
    const { data, error } = await supabase
      .from('books')
      .insert([{
        title: bookData.title,
        author: bookData.author,
        genre: bookData.genre,
        publication_date: bookData.publication_date,
        format: bookData.format
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateBook(id, bookData) {
    const { data, error } = await supabase
      .from('books')
      .update({
        title: bookData.title,
        author: bookData.author,
        genre: bookData.genre,
        publication_date: bookData.publication_date,
        format: bookData.format
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteBook(id) {
    const { error } = await supabase
      .from('books')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  }
};