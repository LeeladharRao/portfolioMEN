const express = require("express");
const router = express.Router();
const Post = require("./postModel");

router.route("/blog").get((req,res) => {
    Post.find()
        .then(foundPosts => res.json(foundPosts))
})

module.exports = router;