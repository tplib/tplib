const express = require('express'),
      async = require('async'),
      Book = require('../models/books'),
      router = express.Router();

router.get('/', (req, res) => {
  async.parallel({
    bookList: (cb) => { Book.find().sort({ 'title': 1}).exec(cb); },
    bookCount: (cb) => { Book.count({}).exec(cb); },
    lastUploaded: (cb) => { Book.find().sort({ 'createdAt': -1 }).limit(3).exec(cb); },
    lastUpdated: (cb) => { Book.findOne().sort({ 'updatedAt': -1 }).exec(cb); },
  }, (err, result) => {
    res.render('index', {
      title: 'tplib',
      book_list: result.bookList,
      book_count: result.bookCount,
      last_uploaded: result.lastUploaded,
      last_updated: result.lastUpdated.updatedAt.toString(),
    });
  });
});

module.exports = router;