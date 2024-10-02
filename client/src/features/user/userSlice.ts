import { createSlice } from "@reduxjs/toolkit";
import type { User, CurrentUser } from "../../app/types";
import { userApi } from "../../app/services/userApi";
import { RootState } from "../../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: User[] | null;
  user: User | null;
  current: CurrentUser | null;
}

const initialState: InitialState = {
  users: null,
  user: null,
  current: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    initial: () => initialState,
    setCurrent: create.reducer((state, action: PayloadAction<CurrentUser>) => {
      state.current = action.payload;
    }),
    resetUser: (state) => {
      state.user = null;
    },
    addUserToList: create.reducer((state, action: PayloadAction<User>) => {
      state.users?.unshift(action.payload);
    }),
  }),
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getAllUsers.matchFulfilled,
        (state, action) => {
          state.users = action.payload.items;
        }
      )
      .addMatcher(
        userApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
        }
      );
  },
});

export const { setCurrent, resetUser, initial, addUserToList } = slice.actions;

export default slice.reducer;

export const selectCurrent = (state: RootState) => state.user.current;

export const selectAddress = (state: RootState) => state.user.current?.address;

export const selectUser = (state: RootState) => state.user.user;

export const selectUsers = (state: RootState) => state.user.users;
