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
    <div className="m-12">
      <img
        className="mask mask-squircle"
        src={user.picture.large}
        alt="User Avatar"
      />
      <ol>
        <li>
          <h1 className="font-bold">About</h1>
          {user.name.title} {user.name.first} {user.name.last}
        </li>
        <li>{user.gender}</li>
        <li>{user.nat}</li>
        <h1 className="font-bold">Contact information</h1>
        <li>{user.email}</li>
        <li>{user.cell}</li>
        <li>{user.phone}</li>
        <h1 className="font-bold">Address</h1>
        <li>{user.location.country}</li>
        <li>{user.location.city}</li>
        <li>{user.location.street.name}</li>
      </ol>
    </div>
  );
}

export default UserPage;
