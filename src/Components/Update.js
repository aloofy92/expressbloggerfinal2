

import { useOutletContext, useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import { useState, useEffect } from "react";

const Update = () => {

  const bloggerData = useOutletContext();

  const navigateBlog = useNavigate();

  const { id } = useParams();

  const [update, setUpdateBlog] = useState({

    title: "",

    text: "",

    author: "",

    year: "",

    categories: [],
  });

  useEffect(() => {

    axios
      .get(`${bloggerData}/single/${id}`)

      .then((res) => {

        setUpdateBlog(res.data.blog);

      })
      .catch((err) => {

        console.log(err);

      });

  }, [bloggerData, id]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setUpdateBlog((blog) => {

      return {

        ...blog,

        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .put(`${bloggerData}/update-one/${id}`, update)

      .then((res) => {

        setUpdateBlog(res.data.blog);

        navigateBlog("/added-blog");
      })
      .catch((err) => {

        console.log(err);
      });

  };

  return (
    
    <div className="blog-area">

      <div className="blog-form">

        <h1>Update</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="title">Blog title:</label>

          <br />

          <input type="text" name="title" value={update.title} onChange={handleChange} placeholder="Add Title"/>

          <br />

          <label htmlFor="text">Blog text:</label>

          <br />

          <textarea name="text" value={update.text} onChange={handleChange} placeholder="Add Description"></textarea>

          <br />

          <label htmlFor="year">Blog Year:</label>

          <br />

          <input type="text" name="year" value={update.year} onChange={handleChange} placeholder="Enter Year Created"/>


          <label htmlFor="author">Blog author:</label>

          <br />

          <input type="text" name="author" value={update.author} onChange={handleChange} placeholder="Enter Author"/>

          <br />

          <label htmlFor="categories">Blog Categories:</label>

          <br />

          <input type="text" name="categories" value={update.categories} onChange={handleChange} placeholder="Enter the Category "/>

          <br />

          <button>Update</button>

        </form>

      </div>

    </div>

  );
};

export default Update;