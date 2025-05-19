import UserCard from "../components/UserCard";
import Pagination from "../components/common/Pagination";
import SortButton from "../components/common/SortButton";
import UserModal from "../components/UserModal";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { useUsers } from "../components/hooks/useUsers";
import { normalizeString, paginate } from "../utils";
import { SortColumn, User } from "../types";
import { PAGE_SIZE } from "../services/userService";
import { useOutletContext } from "react-router-dom";
import SearchBox from "../components/common/SearchBox";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name.last", order: "asc" };

interface LayoutContext {
  searchQuery: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

function UsersPage() {
  const { currentPage, setCurrentPage } = useOutletContext<LayoutContext>();
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const users = useUsers(currentPage);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  function handleOpenModal(user: User) {
    setSelectedUser(user);
  }

  function handleSearch(value: string) {
    setSearchQuery(normalizeString(value));
    setCurrentPage(1);
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
    <div className="min-h-screen p-6 m-10 bg-base-100 text-neutral ">
      <div className="flex flex-wrap items-center justify-between gap-4 my-6">
        <Pagination
          pageSize={PAGE_SIZE}
          totalCount={filteredUsers.length}
          selectedPage={currentPage}
          onPageSelect={setCurrentPage}
        />
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <SortButton
          onClick={() => handleSort("name.last")}
          sortOrder={sortColumn.order}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
