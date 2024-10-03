import { api } from "./api";
import { User } from "../types/typeUser";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => ({
        url: "/data",
        method: "GET",
      }),
    }),
    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/data/id/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useLazyGetAllUsersQuery,
  useLazyGetUserByIdQuery,
} = userApi;

export const {
  endpoints: { getAllUsers, getUserById },
} = userApi;
