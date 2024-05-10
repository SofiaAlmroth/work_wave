import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
      <Link to={"/users"} className="btn btn-ghost text-4xl font-black">
        Work Wave
      </Link>
    </div>
  );
}

export default Navbar;
