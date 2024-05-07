import { useState } from "react";
import UserCard from "./common/UserCard";
import Pagination from "./common/Pagination";
import { useUsers } from "./hooks/useUsers";
import { normalizeString, paginate } from "../utils";
import SearchBox from "./common/SearchBox";
import Navbar from "./Navbar";

const PAGE_SIZE = 10;

function UsersPage() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const users = useUsers();

  function handleSearch(value: string) {
    setSearchQuery(normalizeString(value));
    setSelectedPage(1);
  }

  const filteredUsers = users.filter((user) =>
    normalizeString(
      `${user.name.first} ${user.name.last} ${user.name.title}`
    ).includes(searchQuery.toLowerCase())
  );

  const paginatedUsers = paginate(filteredUsers, PAGE_SIZE, selectedPage);

  return (
    <>
      <Navbar />
      <SearchBox value={searchQuery} onChange={handleSearch} />
      <UserCard users={paginatedUsers} />
      <Pagination
        pageSize={PAGE_SIZE}
        totalCount={filteredUsers.length}
        selectedPage={selectedPage}
        onPageSelect={setSelectedPage}
      />
    </>
  );
}

export default UsersPage;
