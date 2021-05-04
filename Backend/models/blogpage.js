const mongoose = require("mongoose");

const { Schema } = mongoose;

const BlogPage_Schema = new Schema({
  blogGroupName: String,
  blogTitle: String,
  blogContent: String,
  blogUsername: String,
});

module.exports = mongoose.model("BlogDetail", BlogPage_Schema);
