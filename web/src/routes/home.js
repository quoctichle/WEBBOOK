const express = require("express")
const router = express.Router()
const Book = require('../models/books');



exports.getAddBook = (req, res) => {
    res.render('add-book', {
      title: 'Thêm sách mới'
    });
  };
  
  exports.postAddBook = async (req, res, next) => {
    try {
      const book = new Book({
        title: req.body.title,
        category_Id: req.body.category_Id,
        author: req.body.author,
        content: req.body.content,
        description: req.body.description,
        user_name: req.body.user_name
      });
      await book.save();
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  };