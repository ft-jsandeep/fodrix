import React from "react";

import "./Blogs_Home.css";
import Blogdata from "./Blogdata.json";

// import Images from "../../All_Images/Images";

const BlogsHome = () => {
  return (
    <>
      <h1 className="blogs_heading_components text-center">Blogs</h1>
      <div className="blogs_home_components ">
        <div class="container-fluid">
          <div class="flex">
            <div className="topblogs_components">
              <div className="grid">
                {" "}
                {Blogdata.map((blog) => {
                  return (
                    <>
                      <div className="grid-items" data-aos="fade-up">
                        <img
                          loading="eager"
                          src={blog.imgsrc}
                          alt="not Found"
                        />
                        <div className="img-description ">
                          <h3> {blog.title} </h3>
                          <p style={{ fontSize: "18px" }}>{blog.description}</p>
                          <a href="/Blog1">
                            <button
                              onClick={() => {
                                localStorage.setItem("city", blog.city);
                              }}
                              className="explore-destination"
                            >
                              Read more
                            </button>
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <a href="/blogsread" class="btnblogshome">
          Explore More
        </a>
      </div>
    </>
  );
};
export default BlogsHome;
