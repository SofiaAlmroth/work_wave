import { useState } from "react";
import UserCard from "./common/UserCard";
import Pagination from "./common/Pagination";
import { useUsers } from "./hooks/useUsers";
import { paginate } from "../utils";

const PAGE_SIZE = 10;

function UsersPage() {
  const [selectedPage, setSelectedPage] = useState(1);
  const users = useUsers();

  const paginatedUsers = paginate(users, PAGE_SIZE, selectedPage);
  return (
    <>
      <UserCard users={paginatedUsers} />
      <Pagination
        pageSize={PAGE_SIZE}
        totalCount={users.length}
        selectedPage={selectedPage}
        onPageSelect={setSelectedPage}
      />
    </>
  );
}

export default UsersPage;
