

import { useOutletContext, useNavigate } from "react-router-dom";

import axios from "axios";

  const DeleteOneBlog = (props) => {

  const bloggerData = useOutletContext();

  const navigateBlog = useNavigate();

  const deleteoneBlog = (id) => {

    axios

      .delete(`${bloggerData}/delete-One/${props.blog.id}`)

      .then((res) => {

        navigateBlog("/deleted-blog");

      })
      .catch((err) => {

        console.log(err);
      });
  };

  return (

    <div>
        
      <button onClick={() => deleteoneBlog(props.blog.id)}>Delete One Blog</button>
    </div>
  );
};

export default DeleteOneBlog;