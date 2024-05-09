import { Link, useParams } from "react-router-dom";
import { useUsers } from "../components/hooks/useUsers";

function UserPage() {
  const { email: userEmail } = useParams();
  const users = useUsers();

  const user = users.find((user) => user.email === userEmail);

  if (!user) {
    return (
      <div className="flex justify-center align-">
        <span className="loading loading-spinner text-primary"></span>
        <p>Loading User</p>;
      </div>
    );
  }

  return (
    <div className="card bg-primary bg-opacity-10 shadow-xl m-12 text-lg">
      <div className="card-body p-2 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-end lg:m-12">
          <div className="flex-1 p-2">
            <img
              className="mask mask-squircle mb-6"
              src={user.picture.large}
              alt="User Avatar"
            />
            <div>
              <div className="flex items-center mb-3">
                <i className="fa-solid fa-user pr-2"></i>
                <p>
                  {user.name.title} {user.name.first} {user.name.last}
                </p>
              </div>
              <p className="flex items-center mb-3 ">
                <i className="fa-solid fa-venus-mars pr-2"></i>
                {user.gender.toUpperCase()}
              </p>
              <p className="flex items-center mb-3 ">
                <i className="fa-solid fa-globe pr-2"></i>
                {user.nat}
              </p>
            </div>
          </div>
          <div className="flex-1 p-2">
            <div className="flex items-center mb-3">
              <i className="fa-solid fa-envelope pr-2"></i>
              <p className="email-text">{user.email}</p>
            </div>
            <div className="flex items-center mb-3">
              <i className="fa-solid fa-phone pr-2"></i>
              <p>{user.cell}</p>
            </div>
            <div className="flex items-center mb-3">
              <i className="fa-solid fa-mobile pr-2"></i>
              <p>{user.phone}</p>
            </div>
          </div>
          <div className="flex-1 p-2">
            <div className="flex items-center mb-3">
              <i className="fa-solid fa-location-dot pr-2"></i>
              <p>{user.location.street.name}</p>
            </div>
            <div className="flex items-center mb-3">
              <i className="fa-solid fa-city pr-2"></i>
              <p>{user.location.city}</p>
            </div>
            <div className="flex items-center mb-3">
              <i className="fa-solid fa-globe pr-2"></i>
              <p>{user.location.country}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={"/users"} className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
