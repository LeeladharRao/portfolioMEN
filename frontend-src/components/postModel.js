const mongoose = require("mongoose");

const postsSchema = {
    title = String,
    postContent = String
}

const Post = mongoose.model("Post", postsSchema);

module.exports = Post;