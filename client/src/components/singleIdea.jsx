import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/custom.css";
import Header from "./Header";

function SingleIdea() {
  const [items, setItems] = useState([]);
  const { Id } = useParams();
  const instructfuncsingle = async () => {
    try {
      const data = await axios
        .get(`http://localhost:8080/Idea/${Id}`)
        .then((res) => {
          setItems(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    instructfuncsingle();
  }, []);

  return (
    <div>
      <Header />
      <div class="container">
        {items.map((item) => (
          <div className="mrg-bottom">
            <div class="card bg-info card-shadow">
              <div key="item._id" class="card-header">
                {item.ideaProblemStatement}
              </div>
              <div class="card-body">
                <h5 class="card-title" key="item._id">
                  {item.ideaProblemDescription}
                </h5>
                <hr />
                <h6
                  class="card-subtitle mb-2 text-muted card-idea-username"
                  key="item._id"
                >
                  {item.ideaEnvironment}
                </h6>
                <p class="card-text" key="item._id">
                  {item.ideaContent}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleIdea;
