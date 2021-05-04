import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router";

const PostIdea = () => {
  const [idea, setIdea] = useState({
    ideaProblemStatement: "",
    ideaProblemDescription: "",
    ideaContent: "",
    ideaEnvironment: "",
  });

  const handleChange = (event) => {
    setIdea({
      ...idea,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/idea/compose", idea)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("We recieved your Idea! Thanks for posting 😄");
  };
  return (
    <div className="container">
      <section id="header-idea">
        <h1>Your Idea</h1>
      </section>
      <div class="card">
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Problem Statement</label>
              <input
                class="form-control"
                type="text"
                name="ideaProblemStatement"
                value={idea.ideaProblemStatement}
                onChange={handleChange}
                required
              />
              <label>Problem Description</label>
              <textarea
                class="form-control"
                name="ideaProblemDescription"
                value={idea.ideaProblemDescription}
                onChange={handleChange}
                requiredrows="5"
                cols="30"
              ></textarea>
              <label>Idea Content</label>
              <textarea
                class="form-control"
                name="ideaContent"
                rows="5"
                cols="30"
                value={idea.ideaContent}
                onChange={handleChange}
                required
              ></textarea>
              <label>Idea Environment</label>
              <textarea
                class="form-control"
                name="ideaEnvironment"
                rows="5"
                cols="30"
                value={idea.ideaEnvironment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div class="btn-idea-publish">
              <button
                class="btn btn-primary btn-lg btn-idea"
                type="submit"
                name="button"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PostIdea;
