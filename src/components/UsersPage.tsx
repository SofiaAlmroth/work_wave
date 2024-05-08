import UserCard from "./common/UserCard";
import Pagination from "./common/Pagination";
import SearchBox from "./common/SearchBox";
import _ from "lodash";
import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { normalizeString, paginate } from "../utils";
import { SortColumn } from "../types";

const PAGE_SIZE = 10;
const DEFAULT_SORT_COLUMN: SortColumn = { path: "name.first", order: "asc" };

function UsersPage() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
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

  const sortedUsers = _.orderBy(
    filteredUsers,
    sortColumn.path,
    sortColumn.order
  );

  const paginatedUsers = paginate(sortedUsers, PAGE_SIZE, selectedPage);

  return (
    <>
      <SearchBox value={searchQuery} onChange={handleSearch} />

      <UserCard onSort={setSortColumn} users={paginatedUsers} />
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
