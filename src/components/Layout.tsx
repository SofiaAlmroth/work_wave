import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Layout() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen  bg-base-200 text-neutral">
      <Navbar resetPagination={() => setCurrentPage(1)} />

      <Outlet context={{ currentPage, setCurrentPage }} />
    </div>
  );
}

export default Layout;
