import { Link } from "react-router-dom";

const DeleteMultiple = () => {

  return (

    <div>

      <h1>You've have Deleted All Blogs</h1>

      <button className="check-button"><Link to={"/blogs"}>&larr; Back to List</Link></button>

    </div>
  );
};

export default DeleteMultiple;