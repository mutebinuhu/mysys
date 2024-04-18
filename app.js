const express = require('express')
let dbConnection = require('./config/db');
require('dotenv').config()
const cors = require("cors");
let app = express()
app.use(express.json());
const  requestsRouter = require('./routes/requests')


app.use(cors())
app.use("/api/requests", requestsRouter)







module.exports = app