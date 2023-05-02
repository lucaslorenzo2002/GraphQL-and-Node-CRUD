const mongoose = require('mongoose');

const userCollection = "usuarios";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'porfavor escriba un mail valido',
        ] 
    }
})


const User = mongoose.model(userCollection, userSchema);
module.exports = User