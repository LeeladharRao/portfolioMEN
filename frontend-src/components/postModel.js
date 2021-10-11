const mongoose = require("mongoose");

const postsSchema = {
    id = String, 
    title = String,
    postContent = String
}

const Post = mongoose.model("Post", postsSchema);

module.exports = Post;