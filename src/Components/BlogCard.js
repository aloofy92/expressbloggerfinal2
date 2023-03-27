

import axios from 'axios';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const urlEndpoint = 'http://localhost:3000/blogs';

export default function BlogCard() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        axios.get(`${urlEndpoint}/all`).then((response) => {

            setBlogs(response.data.blogs);

        });

    }, []);



    return (

        <div className='blog-card-content'>

            {blogs.map((blog) => (

                <div key={blog.id}>

                    <Link to={`/blogs/${blog.id}`}>
                       
                        <h1>{blog.title}</h1>

                    </Link>

                    <h2>by {blog.author}</h2>

                </div>

            ))}

        </div>

    );

}