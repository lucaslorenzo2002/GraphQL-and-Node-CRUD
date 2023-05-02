const mongoose = require('mongoose');

const postCollection = "posts";

const postSchema = new mongoose.Schema({
    authorId:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
})


const Post = mongoose.model(postCollection, postSchema);
module.exports = Post