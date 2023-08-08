import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
  token: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});
export const { addUser, clearUser } = authReducer.actions;
export default authReducer;
