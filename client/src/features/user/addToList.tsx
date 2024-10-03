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
      if (!isExist()) dispatch(addUserToList(current as User));
    } catch (error) {
      console.log(error);
    }
  };

  const isExist = () => {
    if (users) {
      const user = users?.find((user) => String(user.id) === "my");
      return user ? true : false;
    }
    return false;
  };

  return (
    <Button className={isExist() ? "opacity-50" : ""} onClick={handleToList}>
      List me to the table
    </Button>
  );
};
