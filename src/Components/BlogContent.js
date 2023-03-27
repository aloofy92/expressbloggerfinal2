import { useOutletContext, useNavigate } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

const BlogContent = () => {

  const [editBlog, setNewBlog] = useState({

    title: "",

    text: "",

    author: "",

    year: "",

    categories: [],
    
  });

  const bloggerData = useOutletContext();

  const navigateBlog = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setNewBlog((blog) => {
      return {
        ...blog,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${bloggerData}/create-new-blog`, editBlog)
      .then((res) => {
        setNewBlog(res.data.blog);
        navigateBlog("/blog-new-added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-content">

      <div className="blog-form-area">
       
        <br />

        <h1>Add Blog</h1>
      
        <br />

        <form onSubmit={handleSubmit} className="edit-form">

          <label htmlFor="title">Blog title:</label>
         
          <br />

          <input type="text"name="title"value={editBlog.title}onChange={handleChange}placeholder="Add title" required/>

          <br />

          <label htmlFor="text">Blog text:</label>

          <br />

          <textarea name="text" value={editBlog.text} onChange={handleChange}placeholder="Add Info" required></textarea>

          <br />

          <label htmlFor="year">Blog Year:</label>

          <br />

          <input type="text" name="year" value={editBlog.year} onChange={handleChange}placeholder="Enter the Year" required/>

          <br />

          <label htmlFor="author">Blog author:</label>

          <br />

          <input type="text" name="author" value={editBlog.author} onChange={handleChange}placeholder="Enter the Author" required/>

          <br />

          <label htmlFor="categories">Blog Categories:</label>

         <br />

          <input type="text" name="categories" value={editBlog.categories} onChange={handleChange} placeholder="Enter Category" required/>

          <br />
  
          <button type='submit'>Add Blog</button>

        </form>

      </div>
      
    </div>
  );
};

export default BlogContent;