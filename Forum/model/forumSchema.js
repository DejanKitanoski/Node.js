const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    slika: {
        type: String,
        default: "default.jpg"
    },

    author:{
        type: mongoose.Schema.ObjectId,
        ref:"user"
        
    }
})
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

