const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(
  "mongodb+srv://John:Welcome@123@cluster0.jsl2e.mongodb.net/Incubation?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("Mongodb connected");
    } else {
      console.log("Mongodb is not connected");
    }
  }
);

const Idea_Schema = new mongoose.Schema({
  ideaProblemStatement: String,
  ideaProblemDescription: String,
  ideaContent: String,
  ideaEnvironment: String,
});
const IdeaDetail = mongoose.model("IdeaDetail", Idea_Schema);

app.route("/idea").get((req, res) => {
  IdeaDetail.find({}, function (err, ideas) {
    if (!err) {
      res.send(ideas);
    } else {
      res.send(err);
    }
  });
});

app.route("/idea/compose").post((req, res) => {
  const idea = new IdeaDetail({
    ideaProblemStatement: req.body.ideaProblemStatement,
    ideaProblemDescription: req.body.ideaProblemDescription,
    ideaContent: req.body.ideaContent,
    ideaEnvironment: req.body.ideaEnvironment,
  });
  // console.log(idea);
  idea.save();
});
app.route("/Idea/:Id").get((req, res) => {
  const Id = req.params.Id;
  IdeaDetail.find(
    {
      _id: Id,
    },
    function (err, foundList) {
      if (err) {
        console.log(err);
      } else {
        res.send(foundList);
      }
    }
  );
});

app.route("/deleteIdeas").delete((req, res) => {
  IdeaDetail.deleteMany({}, (err) => {
    if (!err) {
      res.send("successfully deleted");
    } else {
      res.send(err);
    }
  });
});

const BlogPage_Schema = new mongoose.Schema({
  blogGroupName: String,
  blogTitle: String,
  blogContent: String,
  blogUsername: String,
});
const BlogDetail = mongoose.model("BlogDetail", BlogPage_Schema);

app.route("/compose").post((req, res) => {
  const blogPost = new BlogDetail({
    blogGroupName: req.body.blogGroupName,
    blogTitle: req.body.blogTitle,
    blogContent: req.body.blogContent,
    blogUsername: req.body.blogUsername,
  });
  blogPost.save();
  return res.status(200).json(blogPost);
});
app.route("/posts").get((req, res) => {
  BlogDetail.find({}, function (err, posts) {
    res.send(posts);
  });
});
app.route("/deleteposts").delete((req, res) => {
  BlogDetail.deleteMany({}, (err) => {
    if (!err) {
      res.send("successfully deleted");
    } else {
      res.send(err);
    }
  });
});
app.route("/posts/:blogGroupName").get((req, res) => {
  const givenBlogGroupName = req.params.blogGroupName;
  BlogDetail.find(
    {
      blogGroupName: givenBlogGroupName,
    },
    function (err, foundList) {
      if (err) {
        console.log(err);
      } else {
        res.send(foundList);
      }
    }
  );
});

app.route("/posts/:postId").get((req, res) => {
  const requestedId = req.params.postId;
  BlogDetail.findOne(
    {
      _id: requestedId,
    },
    function (err, blogPost) {
      if (err) {
        console.log(err);
      } else {
        console.log(blogPost);
      }
    }
  );
});

app.listen(8080, () => console.log("Server started at http://localhost:8080"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
