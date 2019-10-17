// MONGODB CONNECTION: mongodb+srv://Simpcy:<password>@cluster0-ejso1.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Simpcy:MEwIX7lGPlNRkb4v@cluster0-ejso1.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Thing created successfully!'
    });
  });

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop',
        price: 3399,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;