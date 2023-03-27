import { useOutletContext, useNavigate } from "react-router-dom";

import axios from "axios";

const DeleteMultiple = (props) => {

  const BloggerData = useOutletContext();

  const navigateBlog = useNavigate();

  const deleteMultiple = () => {

    axios

      .delete(`${BloggerData}/delete-multiple`)

      .then((res) => {

        navigateBlog("/deleted-blogs");

      })
      .catch((err) => {

        console.log(err);
      });
  };

  return (

    <div>

      <button onClick={() => deleteMultiple()} className="delete-multiple-button">
        {`* Delete ${props.blogs.length} ${
          props.blogs.length > 1 ? "Blogs" : "Blog"
        } *`}
      </button>

    </div>
  );
};

export default DeleteMultiple;