const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  format: {}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;