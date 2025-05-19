import { Link } from "react-router-dom";
import WorkWaveLogo from "../assets/WorkWave_logo.svg";

interface Props {
  resetPagination(): void;
}

function Navbar({ resetPagination }: Props) {
  return (
    <div className="navbar shadow-none !bg-base-200">
      <Link
        to={"/"}
        className="btn btn-ghost text-4xl font-black hover:bg-secondary/10 hover:scale-105 transition-all duration-200"
      >
        <img
          src={WorkWaveLogo}
          alt="WorkWave Logo"
          className="h-12 w-auto"
          onClick={resetPagination}
        />
      </Link>
    </div>
  );
}

export default Navbar;
