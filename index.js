const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const Port = process.env.PORT || 9000;
const DB_url = process.env.DB_URL;

app.use(express.static('static'));

mongoose.connect(DB_url


  
)
  .then(() => console.log("Connected to database"))
  .catch(err => console.error("Error connecting to database:", err));



app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(Port, () => {
  console.log(`Example app listening at http://localhost:${Port}`);
});