

import { Link } from "react-router-dom";

const DeleteCheck = () => {

  return (

    <div>

      <h2> Blog was Deleted</h2>

      <button className="check"><Link to={"/blogs"}>&larr; Back to Blog List</Link></button>

    </div>

  );
};

export default DeleteCheck;