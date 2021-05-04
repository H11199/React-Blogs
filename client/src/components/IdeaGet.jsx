import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useParams } from "react-router-dom";
import "../styles/custom.css";
function IdeaGet() {
  const [items, setItems] = useState([]);

  const instructfunc = async () => {
    try {
      const data = await axios.get("http://localhost:8080/idea").then((res) => {
        setItems(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    instructfunc();
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        {items.map((item) => (
          <div className="mrg-bottom">
            <div class="card bg-info card-shadow">
              <div key="item._id" class="card-header">
                {item.ideaProblemStatement}
              </div>
              <div class="card-body">
                <h5 class="card-title" key="item._id">
                  {item.ideaProblemDescription.slice(0, 50) + "..."}
                </h5>
                <hr />
                <h6
                  class="card-subtitle mb-2 text-muted card-idea-username"
                  key="item._id"
                >
                  {item.ideaEnvironment.slice(0, 50) + "..."}
                </h6>

                <p class="card-text" key="item._id">
                  {item.ideaContent.slice(0, 300) + "..."}
                </p>

                <Link
                  to={`/Idea/${item._id}`}
                  className="btn btn-light ghost btn-client"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default IdeaGet;
