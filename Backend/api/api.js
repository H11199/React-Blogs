const Router = require("express").Router();
const BlogDetail = require("../models/blogpage");


Router.route("/compose")
    .post( (req,res) => {
        const blogPost = new BlogDetail({
            blogGroupName: req.body.blogGroupName,
            blogTitle: req.body.blogTitle,
            blogContent: req.body.blogContent
        })
        blogPost.save();
    })

Router.route("/posts/:blogGroupName")
    .get( (req, res) => {
        const givenBlogGroupName = req.params.blogGroupName;
        BlogDetail.find({blogGroupName: givenBlogGroupName}, function(err, foundList) {
            if(err){
                console.log(err);
            }else{
                console.log(foundList);
            }
        })
    })

Router.route("/posts/:postId")
    .get( (req, res) => {
        const requestedId = req.params.postId;
        BlogDetail.findOne({_id: requestedId}, function(err, blogPost) {
            if(err){
                console.log(err);
            }else{
                console.log(blogPost);
            }
        })
    })
    