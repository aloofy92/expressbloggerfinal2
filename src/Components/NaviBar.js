import { Link, Outlet } from "react-router-dom";

const NaviBar = () => {

  const bloggerData = process.env.REACT_APP_ENDPOINT;

  return (

    <div>

      <div className="header">

        <h1>Blog Application</h1>

        <nav className="navi-Bar">

          <Link to={"/"}>HomePage</Link>    <Link to={"/blogs"}>Blog's List</Link>

        </nav>

      </div>

      <Outlet context={bloggerData} />

    </div>
  );
};

export default NaviBar;