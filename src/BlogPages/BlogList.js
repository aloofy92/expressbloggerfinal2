

import { useOutletContext, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import BlogCard from "../Components/BlogCard";

import DeleteOneBlog from "../Components/DeleteOneBlog";

import DeleteMultiple from "../Components/DeleteMultiple";

const BlogList = () => {

  const bloggerData = useOutletContext();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    axios

      .get(`${bloggerData}/blog-list`)

      .then((res) => {

        setBlogs(res.data.blogs);
      })
      .catch((err) => {

        console.log(err);
      });

  }, [bloggerData]);

  return (

    <div className="blog-form">

      <br />
      
      <button>

        <Link to={"/blog-content"}> Add Blog</Link>

      </button>

      <div className="list-area">

        {blogs.map((blog) => {

          return (

            <div key={blog.id} className="blog-card">

              <BlogCard blog={blog} />

              <div className="list-buttons">

                <button>

                  <Link to={`/blog/${blog.id}`} className="link-button">

                    View Blog

                  </Link>

                </button>

                <button>
                  <Link to={`/blog-update/${blog.id}`} className="link-button">

                    Update Blog

                  </Link>

                </button>

                <DeleteOneBlog blog={blog} />

              </div>

            </div>
          );
        })}

        <br />
        
      </div>

      {blogs.length > 0 ? (

        <DeleteMultiple blogs={blogs} />

      ) : (
        <h1>No Blog available</h1>
      )}
    </div>
  );
};



export default BlogList;