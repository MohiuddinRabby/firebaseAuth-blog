import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Posts from "../Posts/Posts";
import { useAuth } from "../Login/useAuth";

const Blogs = () => {
  const auth = useAuth();
  console.log("blog page", auth.user);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    postData();
  }, []);
  const postData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.slice(0, 10));
        // data.map(item=>console.log(item.title))
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Blogs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Log out
                </a>
              </li>
              <li className="nav-item ">
                {auth.user ? (
                  <img
                    src={auth.user.photo}
                    style={{ width: "50px" }}
                    className="rounded-circle"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid py-5">
        <div className="row">
          {blog.map((item) => (
            <div className="col-md-12" key={item.id}>
              <Posts posts={item}></Posts>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
