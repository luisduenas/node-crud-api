// app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const punch = require('./routes/punch.route'); // Imports routes for the punches
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI;
const port = process.env.PORT;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/punches', punch);



app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});