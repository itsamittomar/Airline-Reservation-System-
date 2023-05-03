const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const bcrypt = require('bcrypt')
const { Client } = require('pg')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static("public"))

app.use('/' , require('./routes/urls'));
let connectionString = ""
const client = new Client({
    connectionString : connectionString
})
client.connect();



module.exports = app;
