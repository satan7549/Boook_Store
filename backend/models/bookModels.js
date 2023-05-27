const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter book title"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "please enter book author"],
    trim: true,
  },
  price: {
    type: Number,
    require: [true, "please enter price"],
    maxLength: [4, "year can't exceed 4 characters"],
  },
  image: [String],
  category: {
    type: String,
    require: [true, "please enter book category"],
  },
  description: {
    type: String,
    required: [true, "please enter movie synopsis"],
  },
  createAt: { type: Date, default: Date.now },
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
