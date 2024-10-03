import { User } from "../entities/user/types/typeUser";

export const isExistCurrent = (users: User[] | null) => {
  if (users) {
    const isExist = users?.some((user) => String(user.id) === "my");
    return isExist;
  }
  return false;
};
