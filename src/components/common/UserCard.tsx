import { User } from "../../types";

interface Props {
  users: User[];
}

function UserCard({ users }: Props) {
  return (
    <>
      {users.map((user) => (
        <div
          key={user.nat}
          className="card bg-base-100 shadow-xl mx-10 m-3 flex flex-row items-center justify-between p-6"
        >
          <div className="flex flex-row items-center">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user.picture.large} alt="User Avatar" />
            </div>
            <div className="ml-3">
              <h2 className="card-title">
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
              </h2>
              <p>
                <i className="fa-solid fa-phone"></i>
                {` ${user.cell}`}
                <i
                  className="fa-solid fa-envelope"
                  style={{ marginLeft: "40px" }}
                ></i>
                {` ${user.email} `}
              </p>
            </div>
          </div>
          <div>
            <button className="btn btn-primary btn-sm">Details</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserCard;
