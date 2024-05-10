import UserCard from "../components/UserCard";
import Pagination from "../components/common/Pagination";
import SearchBox from "../components/common/SearchBox";
import _ from "lodash";
import SortButton from "../components/common/SortButton";
import UserModal from "./UserModal";
import { useEffect, useRef, useState } from "react";
import { useUsers } from "../components/hooks/useUsers";
import { normalizeString, paginate } from "../utils";
import { SortColumn, User } from "../types";
import { PAGE_SIZE } from "../services/userService";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name.last", order: "asc" };

function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const users = useUsers(currentPage);
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleOpenModal(user: User) {
    setSelectedUser(user);
  }

  useEffect(() => {
    if (selectedUser && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [selectedUser]);

  function handleCloseModal() {
    setSelectedUser(null);
    modalRef.current?.close();
  }

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
    <div className="relative">
      <div className="fixed top-14 left-0 right-0 z-10 bg-gray-50 bg-opacity-50 ">
        <SearchBox value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="pt-16">
        <Pagination
          pageSize={PAGE_SIZE}
          totalCount={filteredUsers.length}
          selectedPage={currentPage}
          onPageSelect={setCurrentPage}
        />
      </div>
      <div className="flex flex-row gap-2 m-3 ml-6 absolute top-16">
        <SortButton
          onClick={() => handleSort("name.last")}
          sortOrder={sortColumn.order}
        />
      </div>
      <div className="m-3 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {paginatedUsers.map((user) => (
          <UserCard
            onOpen={() => handleOpenModal(user)}
            key={user.email}
            user={user}
          />
        ))}
      </div>
      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={handleCloseModal}
          ref={modalRef}
        />
      )}
    </div>
  );
}

export default UsersPage;
