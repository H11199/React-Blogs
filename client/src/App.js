import React from "react";
import BlogHome from "../src/components/BlogHome";
import { BrowserRouter, Route } from "react-router-dom";
import SingleProject from "../src/components/SingleProject";
import SingleIdea from "../src/components/singleIdea";
import IdeaGet from "./components/IdeaGet";
import PostIdea from "./components/PostIdea";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={BlogHome} />
        <Route path="/posts/:groupName" exact component={SingleProject} />
        <Route path="/Idea/:Id" exact component={SingleIdea} />
        <Route path="/idea" exact component={IdeaGet} />
        <Route path="/idea/compose" exact component={PostIdea} />
      </div>
    </BrowserRouter>
  );
}
export default App;
