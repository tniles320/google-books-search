const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
  authors: {
    type: Array,
    trim: true,
    required: "At least one author is required",
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    trim: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
