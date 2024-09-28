import { createSlice } from "@reduxjs/toolkit";
import type { User, CurrentUser } from "../../app/types";
import { userApi } from "../../app/services/userApi";
import { RootState } from "../../app/store";

interface InitialState {
  users: User[] | null;
  user: User | null;
  // isAuthenticated: boolean;
  // current: null;
}

const initialState: InitialState = {
  users: null,
  user: null,
  // isAuthenticated: false,
  // current: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // logout: () => initialState,
    // resetUser: (state) => {
    //   state.user = null;
    // },
  },
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

// export const { logout, resetUser } = slice.actions;
export default slice.reducer;

// export const selectIsAuthenticated = (state: RootState) =>
//   state.user.isAuthenticated;

// export const selectCurrent = (state: RootState) => state.user.current;

export const selectUser = (state: RootState) => state.user.user;

export const selectUsers = (state: RootState) => state.user.users;
