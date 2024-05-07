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
    <div className="card bg-primary bg-opacity-10 shadow-xl m-12 text-lg">
      <div className="card-body p-2 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-end lg:m-12">
          {/* User Info Section */}
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
          {/* Contact Info Section */}
          <div className="flex-1 p-4">
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
          {/* Address Info Section */}
          <div className="flex-1 p-4">
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
      </div>
    </div>
  );
}

export default UserPage;
