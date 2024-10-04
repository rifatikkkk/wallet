import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/typeUser";
import { userApi } from "../api/userApi";
import { RootState } from "../../../app/stores/storeRedux";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: User[] | null | undefined;
  user: User | null;
  current: User | null;
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
    setCurrent: create.reducer((state, action: PayloadAction<User>) => {
      state.current = action.payload;
    }),
    resetUser: (state) => {
      state.user = null;
    },
    addUserToList: create.reducer((state, action: PayloadAction<User>) => {
      state.users?.unshift(action.payload);
    }),
    deleteUserFromList: create.reducer(
      (state, action: PayloadAction<User> | null) => {
        state.users = state.users?.filter(
          (user) => user.id !== action?.payload.id
        );
      }
    ),
  }),
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getAllUsers.matchFulfilled,
        (state, action) => {
          state.users = action.payload;
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

export const {
  setCurrent,
  resetUser,
  initial,
  addUserToList,
  deleteUserFromList,
} = slice.actions;

export default slice.reducer;

export const selectCurrent = (state: RootState) => state.user.current;

export const selectUser = (state: RootState) => state.user.user;

export const selectUsers = (state: RootState) => state.user.users;
