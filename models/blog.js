const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creatng schema for titles and blogs
//below schema defne the str of the model
const blogSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{ timestamps: true });

//store the model
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;