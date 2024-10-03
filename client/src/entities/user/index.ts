export { type User } from "./types/typeUser";
export { api } from "./api/api";
export {
  userApi,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useLazyGetAllUsersQuery,
  useLazyGetUserByIdQuery,
} from "./api/userApi";
export {
  selectCurrent,
  selectUser,
  selectUsers,
  setCurrent,
  resetUser,
  initial,
  addUserToList,
  deleteUserFromList,
} from "./slice/userSlice";
