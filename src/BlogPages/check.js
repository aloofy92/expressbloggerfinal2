import { Link } from "react-router-dom";

const Check = () => {

  return (

    <div>

      <h2>Blog has been Added</h2>

      <button className="check"><Link to={"/blogs"}>Back to list!</Link></button>

    </div>

  );
};

export default Check;