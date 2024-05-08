import { Link } from "react-router-dom";
import { User } from "../../types";

interface Props {
  users: User[];
}

function UserCard({ users }: Props) {
  return (
    <>
      {users.map((user) => (
        <div
          key={user.email}
          className=" card bg-base-100 shadow-xl mx-3 my-3 p-6 flex flex-col sm:flex-row justify-between items-start"
        >
          <div className="flex  items-center space-x-3">
            <div className="mask mask-squircle w-12 h-12 overflow-hidden">
              <img
                src={user.picture.thumbnail}
                alt="User Avatar"
                className="object-cover min-w-full min-h-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <div>
                <h2 className="card-title">
                  {`${user.name.title} ${user.name.first} ${user.name.last}`}
                </h2>

                <div className="flex flex-col sm:flex-row mt-2">
                  <div className="flex items-center mr-6">
                    <i className="fa-solid fa-phone pr-2"></i>
                    {user.cell}
                  </div>
                  <div className="flex items-center ">
                    <i className="fa-solid fa-envelope pr-2"></i>
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              to={`/user/${user.email}`}
              className="btn btn-primary btn-sm "
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserCard;
