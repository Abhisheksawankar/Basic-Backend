const mongoose = require('mongoose')


const userSchem = new mongoose.Schema({
    name: {
        type:String,
        require:[true, 'name is required'],
        trim:true,
        maxlength: [20, "name must be less then 20 char"]
    },
    email:{
        type:String,
        require:[true, 'email is required'],
        unique:true
    }
})

// module.exports= mongoose.models("User",userSchem)