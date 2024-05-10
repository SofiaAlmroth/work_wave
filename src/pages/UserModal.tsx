import { User } from "../types";
import { forwardRef } from "react";

interface Props {
  onClose(): void;
  user: User;
}
function UserModal(
  { onClose, user }: Props,
  ref: React.Ref<HTMLDialogElement>
) {
  return (
    <dialog id="order_modal" className="modal" ref={ref}>
      <div className=" modal-box ">
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
        <div className="flex justify-end">
          <button onClick={onClose} className="btn btn-primary">
            Back
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default forwardRef<HTMLDialogElement, Props>(UserModal);
