const express = require ("express");
const cheerio = require ("cheerio")
const expressHandlebars = require ('express-handlebars');
const axios = require ('axios');
const mongoose = require ('mongoose');

const app = express()
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log("port is running on port number " + PORT)
})

app.get('/', function (req, res) {
    res.send('working')
  })

 