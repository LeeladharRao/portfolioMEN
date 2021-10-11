const express = require("express");
const router = express.Router();
const Post = require("./postModel");

router.route("/blog").get((req,res) => {
    Post.find()
        .then(foundPosts => res.text(foundPosts))
})

module.exports = router;