const express = require('express'),
      mongoose = require('mongoose'),
      app = express();

// routes

const index = require(__dirname + '/controllers/index');

// database settings

mongoose.connect(process.env.MLAB_URI, { useMongoClient: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => {
  console.log('Connected to MongoDB')
});

// express settings

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public/css'));
app.use('/book', express.static(__dirname + '/public/books'));
app.use('/', index);

module.exports = app;