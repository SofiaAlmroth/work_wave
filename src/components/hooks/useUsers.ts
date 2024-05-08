import { useEffect, useState } from "react";
import { User } from "../../types";
import { getUsers } from "../../services/userService";

export function useUsers(page = 1) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers();
      const userData = response.data.results;
      setUsers(userData);
    }
    fetchUsers();
  }, [page]);
  return users;
}
