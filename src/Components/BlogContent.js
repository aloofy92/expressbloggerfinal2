import axios from 'axios';

import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';


const urlEndpoint = 'http://localhost:3000/blogs';

export default function BlogContent() {

  const [blog, setBlog] = useState({

    _id: '',
  
    title: '',

    author: '',

    createdAt: '',

    text: '',

    lastModified: '',

    categories: [],

  });


  const { id } = useParams();

  const navigate = useNavigate();
  
  const [editBlog, setEditBlog] = useState(false);
  
  useEffect(() => {

    axios.get(`${urlEndpoint}/get-one/${id}`).then((response) => {

      setBlog(response.data.post);

    });
  }, [id]);

  const handleSubmit = async (event) => {

    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    const updatedBlog = {

      title: formData.get('title'),

      author: formData.get('author'),

      text: formData.get('text'),

    
      categories: [], 

    };
    
    await axios.put(`${urlEndpoint}/update-one/${id}`, updatedBlog);
  
    navigate(`/blogs/${id}`);
  };

  const handleDelete = async () => {

    await axios.delete(`${urlEndpoint}/delete-one/${id}`);

    navigate('/blogs');

  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (

    <div className='blog-content'>

      {editBlog ? (

        <form onSubmit={handleSubmit} className="edit-form">

          <label htmlFor='title'>Title:</label>

          <input type='text' id='title' name='title' defaultValue={blog.title} />

          <label htmlFor='author'>Author:</label>

          <input type='text' id='author' name='author' defaultValue={blog.author} />

          <label htmlFor='text'>Text:</label>

          <textarea id='text' name='text' defaultValue={blog.text}></textarea>

          <button type='submit'>Save</button>

        </form>

      ) : (
        <>
          <h1>{blog.title}</h1>

          <h2>author: {blog.author}</h2>

          <h3>createdAt: {blog.createdAt}</h3>

          <p>{blog.text}</p>

          <button onClick={() => setEditMode(true)}>EditBlog</button>

          <button onClick={handleDelete}>DeleteBlog</button>
        </>
      )}
      
      
    </div>

  );

}