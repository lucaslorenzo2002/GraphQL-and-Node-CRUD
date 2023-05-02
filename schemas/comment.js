const mongoose = require('mongoose');

const commentCollection = "comments";

const commentSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    postId:{
        type: String,
        required: true
    }
})


const Comment = mongoose.model(commentCollection, commentSchema);
module.exports = Comment