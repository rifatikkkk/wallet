import React from "react";
import { Button } from "../../components/button";
import { useSelector } from "react-redux";
import { addUserToList, selectCurrent, selectUsers } from "./userSlice";
import { useAppDispatch } from "../../app/hooks";
import { User } from "../../app/types";

export const AddToList = () => {
  const current = useSelector(selectCurrent);
  const users = useSelector(selectUsers);
  const dispatch = useAppDispatch();

  const handleToList = () => {
    try {
      if (!isExistCurrent()) dispatch(addUserToList(current as User));
    } catch (error) {
      console.log(error);
    }
  };

  const isExistCurrent = () => {
    if (users) {
      const isExist = users?.some((user) => String(user.id) === "my");
      return isExist;
    }
    return false;
  };

  return (
    <Button
      className={isExistCurrent() ? "opacity-50 cursor-default" : ""}
      onClick={handleToList}
    >
      List me to the table
    </Button>
  );
};
