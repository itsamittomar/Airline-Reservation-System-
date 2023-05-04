const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const { Client } = require('pg');
const app = express()
const port = process.env.PORT || 5000
const bcrypt = require('bcrypt')
const db = require('./db/postgres')



app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static("public"))

// Lazy loading of ./routes/urls module
app.use('/', (req, res, next) => {
    require('./routes/urls')(req, res, next);
});
app.listen(port)

module.exports = app;
