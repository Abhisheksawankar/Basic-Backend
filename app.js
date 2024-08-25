require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db');



const app = express()

// Express middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const User = require('../models/userModel.js')

//init conection to db
connectDB()
const userRouter = require("./routes/userRoutes")
app.get('/', userRouter)


module.exports= app

