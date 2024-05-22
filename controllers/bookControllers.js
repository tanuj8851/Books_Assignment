const { body, validationResult } = require("express-validator");
const Book = require("../models/bookSchema");

require("dotenv").config();

const createBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors });
  }

  const { title, author, year } = req.body;
  const coverPage = req.file.path;

  try {
    const book = new Book({ title, author, coverPage, year });
    await book.save();

    res.status(201).json({ msg: "Book Created Successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getBookByID = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateBooks = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, author, year } = req.body;
  let coverPage;
  if (req.file) {
    coverPage = req.file.path;
  }

  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    book.title = title;
    book.author = author;
    book.year = year;
    if (coverPage) {
      book.coverPage = coverPage;
    }

    await book.save();

    res.status(200).json({msg:"Book Updated Successfully",book});
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteBooks = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
  
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error",err:error.message });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookByID,
  updateBooks,
  deleteBooks,
};
