import React from "react";
import buttonRemove from "../../assets/butttonRemove.svg";
import { User } from "../../app/types";
import { deleteUserFromList, selectUsers } from "./userSlice";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";

type Props = {
  user: User;
};

export const DeleteFromList: React.FC<Props> = ({ user }) => {
  const users = useSelector(selectUsers);
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    if (users) {
      // const newUsers = users.filter((userItem) => userItem !== user);
      dispatch(deleteUserFromList(user));
    }
  };
  return (
    <button className="min-w-3 h-3" onClick={handleDelete}>
      <img className="w-full h-auto" src={buttonRemove} alt="remove" />
    </button>
  );
};
