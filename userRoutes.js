const express  =  require('express')
const{ home, creartUser }= require("../controllers/userContro")

// router.get("/",home)


const router = express.Router()
router.get("/",home)
router.post("/createUser.js",creartUser)
module.exports= router