const express = require('express'),
      Book = require('../models/books'),
      router = express.Router();

router.get('/', (req, res) => {
  Book.find({}, null, { sort: { title: 1 }}, (err, bookResult) => {
    if (err) console.error.bind(console, err);

    res.render('index', {
      title: 'tplib',
      book_list: bookResult
    });
  });
});

module.exports = router;