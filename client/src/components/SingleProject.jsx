import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/custom.css";
import Header from "./Header";

function SingleProject() {
  const [items, setItems] = useState([]);
  const { groupName } = useParams();
  const instructfuncsingle = async () => {
    try {
      const data = await axios
        .get(`http://localhost:8080/posts/${groupName}`)
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
                {item.blogTitle}
              </div>
              <div class="card-body">
                <h5 class="card-title" key="item._id">
                  {item.blogUsername}
                </h5>

                <p class="card-text" key="item._id">
                  {item.blogContent}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleProject;
