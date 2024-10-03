import React from "react";
import buttonRemove from "../../../../shared/assets/butttonRemove.svg";
import { User } from "../../../../entities/user";
import { deleteUserFromList, selectUsers } from "../../../../entities/user";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

type Props = {
  user: User;
};

export const DeleteFromList: React.FC<Props> = ({ user }) => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    try {
      if (users) dispatch(deleteUserFromList(user));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="min-w-3 h-3" onClick={handleDelete}>
      <img className="w-full h-auto" src={buttonRemove} alt="remove" />
    </button>
  );
};
