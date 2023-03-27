

import BlogCard from '../Components/BlogCard';

import { Link } from 'react-router-dom';



export default function BlogContent() {

    return (

        <div className='blog-content'>

            <div className='blogs-image-header'>

                <h1>Blogs</h1>

                <button className='blog-button'> Write a new Blog! </button>

            </div>

        </div>
    );
}