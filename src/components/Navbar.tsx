import { Link } from "react-router-dom";
import WorkWaveLogo from "../assets/WorkWave_logo.svg";

interface Props {
  resetPagination(): void;
}

function Navbar({ resetPagination }: Props) {
  return (
    <div className="navbar bg-base-100 ">
      <Link to={"/"} className="btn btn-ghost text-4xl font-black">
        <img
          src={WorkWaveLogo}
          alt="WorkWave Logo"
          className="h-full w-auto mb-12"
          onClick={resetPagination}
        />
      </Link>
    </div>
  );
}

export default Navbar;
