const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const postRouter = require('./routes/post');
const keys = require('./config/keys');


const clientPath = path.join(__dirname, 'client');

// ********** connect MongoDB ****************
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.error(err))
// ********** end connect MongoDB *************

const app = express();

app.use(bodyParser.json());
app.use('/api/post', postRouter);

app.use(express.static(clientPath));




module.exports = app;

