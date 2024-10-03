import React from "react";
import { Button } from "../../components/button";
import { addUserToList, selectCurrent, selectUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { User } from "../../app/types";
import { isExistCurrent } from "../../utils/checkCurrent";

export const AddToList = () => {
  const current = useAppSelector(selectCurrent);
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const handleToList = () => {
    try {
      if (!isExistCurrent(users) && current)
        dispatch(addUserToList(current as User));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      className={isExistCurrent(users) ? "opacity-50 cursor-default" : ""}
      onClick={handleToList}
    >
      List me to the table
    </Button>
  );
};
