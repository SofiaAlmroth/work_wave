import UserCard from "./common/UserCard";
import Pagination from "./common/Pagination";
import SearchBox from "./common/SearchBox";
import _ from "lodash";
import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { normalizeString, paginate } from "../utils";
import { SortColumn } from "../types";
import { PAGE_SIZE } from "../services/userService";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name.first", order: "asc" };

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
      <UserCard onSort={setSortColumn} users={paginatedUsers} />
    </>
  );
}

export default UsersPage;
