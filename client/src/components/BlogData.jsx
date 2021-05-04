import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/custom.css";
function BlogData() {
  const [items, setItems] = useState([]);

  const instructfunc = async () => {
    try {
      const data = await axios
        .get("http://localhost:8080/posts")
        .then((res) => {
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
      {items.map((item) => (
        <div className="mrg-bottom">
          <div class="card bg-info card-shadow">
            <div key="item._id" class="card-header">
              {item.blogTitle}
            </div>
            <div class="card-body">
              <h5 class="card-title" key="item._id">
                {item.blogGroupName}
              </h5>

              <p class="card-text" key="item._id">
                {item.blogContent.slice(0, 300) + "..."}
              </p>

              <Link
                to={`/posts/${item.blogGroupName}`}
                className="btn btn-light ghost btn-client"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BlogData;
