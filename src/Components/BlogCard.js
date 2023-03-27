const BlogCard = (props) => {
    
    const { blogs } = props;
  
    return (
      <div>
        <h1>{blogs.title}</h1>
        <br/>
        <p>{blogs.author}</p>
        <br/>
        <p>{blogs.text}</p>
        <br/>
        <p>Created: {blogs.createdAt}</p>

        {blogs.updatedAt && <p>Updated: {blogs.updatedAt}</p>}

      </div>
    );
  };
  
  export default BlogCard;