import { useState } from 'react';
import axios from 'axios';

const urlEndpoint = 'http://localhost:3000/blogs';

export default function BlogForm() {

  const [blogData, setFormData] = useState({

    title: '',

    text: '',

    author: '',

    year: '',

    categories: [],

  });

  const handleSubmit = async (event) => {

    event.preventDefault();

    await axios.post(`${urlEndpoint}/create-one`, blogData);

  };

  return (

    <form onSubmit={handleSubmit} className="new-blog-form">

      <label htmlFor='title'>Title:</label>

      <input type='text' id='title' name='title' value={blogData.title} onChange={(event) => setFormData({ ...blogData, title: event.target.value })} />
      
      <label htmlFor='text'>Text:</label>

      <text id='text' name='text' value={formData.text} onChange={(event) => setFormData({ ...blogData, text: event.target.value })}></text>
     
      <label htmlFor='author'>Author:</label>
      
      <input type='text' id='author' name='author' value={blogData.author} onChange={(event) => setFormData({ ...blogData, author: event.target.value })} />
    
      <button type='submit'>Create Blog!</button>

    </form>

  );

}