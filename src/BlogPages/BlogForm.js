import { useOutletContext, useParams, Link } from "react-router-dom";

import axios from "axios";

import { useState, useEffect } from "react";

const BlogForm = () => {

  const bloggerData = useOutletContext();

  const { id } = useParams();

  const [blog, setBlog] = useState({

    title: "",

    text: "",

    author: "",

    year: "",

    categories: [],

  });

  useEffect(() => {

    axios

      .get(`${bloggerData}/DeleteOneBlog/${id}`)

      .then((res) => {

        setBlog(res.data.blog);
      })
      .catch((err) => {

        console.log(err);

      });

  }, [bloggerData, id]);

  return (

    <div>
        
      <div>

        <h1>Title: {blog.title}</h1>
        <br/>
        <p>ID: {blog.id}</p>
        <br/>
        <p>Blog Text: {blog.text}</p>
        <br/>
        <p>Author: {blog.author}</p>
        <br/>
        <p>Year: {blog.year}</p>
        <br/>
        <p>Categories: {blog.categories}</p>
        <br/>
        <p>Created At: {blog.createdAt}</p>

        {blog.updatedAt && <p>Last Updated: {blog.updatedAt}</p>}
        <br/>

      </div>

      <button> <Link to={`/update/${blog.id}`}>Update</Link></button>
     
      <br />

      <button className="check"><Link to="/blogs">&larr; Back to List</Link></button>

    </div>
  );
};



export default BlogForm;