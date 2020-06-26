import axios from "axios";

// Google Book API REF)
// https://developers.google.com/books/docs/v1/using
// https://developers.google.com/books/docs/v1/reference

const API_KEY = process.env.GOOGLE_API_KEY;
const googleBookURI = `https://www.googleapis.com/books/v1/`

export default {
  // Gets all books from google book api by a keyword
  getBooks: function(keyword) {
    return axios.get(`${googleBookURI}/volumes?q=${keyword}?key=${API_KEY}`);
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`)
  }
}