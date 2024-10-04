import { api } from "./api";
import { User } from "../types/typeUser";

type Users = {
  items: User[];
};

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => ({
        url: "/data",
        method: "GET",
      }),
      transformResponse: (response: Users) => {
        return response.items;
      },
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
