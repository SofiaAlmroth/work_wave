import UserCard from "./common/UserCard";
import Pagination from "./common/Pagination";
import SearchBox from "./common/SearchBox";
import _ from "lodash";
import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { normalizeString, paginate } from "../utils";
import { SortColumn } from "../types";
import { PAGE_SIZE } from "../services/userService";
import SortButton from "./common/SortButton";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name.last", order: "asc" };

function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const users = useUsers(currentPage);
  console.log("currentPage", currentPage);

  function handleSearch(value: string) {
    setSearchQuery(normalizeString(value));
    setCurrentPage(1);
  }
  function handleSort(path: string) {
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    setSortColumn({ ...sortColumn });
  }

  const filteredUsers = users.filter((user) =>
    normalizeString(
      `${user.name.first} ${user.name.last} ${user.name.title}`
    ).includes(searchQuery.toLowerCase())
  );

  const sortedUsers = _.orderBy(
    filteredUsers,
    sortColumn.path,
    sortColumn.order
  );

  const paginatedUsers = paginate(sortedUsers, PAGE_SIZE, currentPage);

  return (
    <>
      <SearchBox value={searchQuery} onChange={handleSearch} />
      <Pagination
        pageSize={PAGE_SIZE}
        totalCount={filteredUsers.length}
        selectedPage={currentPage}
        onPageSelect={setCurrentPage}
      />
      <div className="flex flex-row gap-2 m-3 ml-6 absolute top-16">
        <SortButton
          onClick={() => handleSort("name.last")}
          sortOrder={sortColumn.order}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {paginatedUsers.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </div>
    </>
  );
}

export default UsersPage;
