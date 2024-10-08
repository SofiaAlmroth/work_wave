import { User } from "../types";

interface Props {
  user: User;
  onOpen(user: User): void;
}

function UserCard({ user, onOpen }: Props) {
  return (
    <>
      <div className=" card bg-base-100 shadow-xl p-6 ">
        <div className="">
          <div className="mask mask-squircle w-16 h-16 my-3">
            <img src={user.picture.medium} alt="User Avatar" />
          </div>
          <div>
            <h2 className="card-title mb-3">
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </h2>
            <div className=" mr-6">
              <i className="fa-solid fa-phone pr-2"></i>
              {user.cell}
            </div>
            <div className="flex items-center ">
              <i className="fa-solid fa-envelope pr-2"></i>
              {user.email}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => onOpen(user)}
            key={user.email}
            className="btn btn-primary btn-sm my-3"
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default UserCard;
