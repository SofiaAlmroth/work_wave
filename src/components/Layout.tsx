import { Outlet } from "react-router-dom";
import SearchBox from "../components/common/SearchBox";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { normalizeString } from "../utils";

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function handleSearch(value: string) {
    setSearchQuery(normalizeString(value));
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen p-2 m-1 bg-base-100 text-neutral">
      <Navbar resetPagination={() => setCurrentPage(1)} />
      <div className="fixed top-14 left-0 right-0 z-10 ">
        <SearchBox value={searchQuery} onChange={handleSearch} />
      </div>
      <Outlet context={{ searchQuery, currentPage, setCurrentPage }} />
    </div>
  );
}

export default Layout;
