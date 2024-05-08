import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SortColumn, User } from "../../types";
import { useUsers } from "../hooks/useUsers";
import { normalizeString, paginate } from "../../utils";
import { PAGE_SIZE } from "../../services/userService";
import _ from "lodash";

interface IUsersContext {
  users: User[];
  handleSearch: (value: string) => void;
  searchQuery: string;
  PAGE_SIZE: number;
  filteredUsers: User[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSortColumn: React.Dispatch<React.SetStateAction<SortColumn>>;
  paginatedUsers: User[];
}

const UsersContext = createContext({} as IUsersContext);

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name.first", order: "asc" };

export default function UsersProvider({ children }: PropsWithChildren) {
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

  const value: IUsersContext = {
    users,
    searchQuery,
    PAGE_SIZE,
    filteredUsers,
    currentPage,
    handleSearch,
    paginatedUsers,
    setCurrentPage,
    setSortColumn,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export function useUsersContext() {
  return useContext(UsersContext);
}
