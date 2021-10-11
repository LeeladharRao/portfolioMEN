const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Admin:B$BVgxgr123@portfoliocluster.y45fo.mongodb.net/postsDB");

app.use("/", require("./frontend-src/components/postRoute"))

module.exports.handler = serverless(app);