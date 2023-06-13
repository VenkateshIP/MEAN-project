const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

/* app.get('/', (req, res) => {
    res.send('Invalid endpoint')
}); */

//this is a middleware to parse json object
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, ()=>{
    console.log('Server has started on port '+port);
});