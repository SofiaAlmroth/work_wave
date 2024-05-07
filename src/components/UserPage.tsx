import { useParams } from "react-router-dom";
import { useUsers } from "./hooks/useUsers";

function UserPage() {
  const { email: userEmail } = useParams();
  const users = useUsers();

  const user = users.find((user) => user.email === userEmail);

  if (!user) {
    return <p>User not found</p>;
  }
  return (
    <div>
      <img src={user.picture.large} alt="User Avatar" />
    </div>
  );
}

export default UserPage;
