import React, { useRef } from "react";
import { Button } from "../../components/button";
import { useSelector } from "react-redux";
import { addUserToList, selectCurrent, selectUsers } from "./userSlice";
import { useAppDispatch } from "../../app/hooks";
import { User } from "../../app/types";

export const AddToList = () => {
  const current = useSelector(selectCurrent);
  const users = useSelector(selectUsers);
  const dispatch = useAppDispatch();
  const isExist = useRef(false);
  const handleToList = () => {
    if (users) {
      const user = users.find((user) => String(user.id) === "my");
      isExist.current = user ? true : false;
      if (!isExist.current) dispatch(addUserToList(current as User));
    }
  };
  return <Button onClick={handleToList}>List me to the table</Button>;
};
