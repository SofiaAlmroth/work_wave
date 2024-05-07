import { useEffect, useState } from "react";
import { User } from "../../types";
import { getUsers } from "../../services/userService";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers();
      const userData = response.data.results; // Access the results array
      setUsers(userData);
    }
    fetchUsers();
  }, []);
  return users;
}
