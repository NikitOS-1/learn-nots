import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
  tokken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, actions) {
      state.email = actions.payload.email;
      state.id = actions.payload.id;
      state.tokken = actions.payload.tokken;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.tokken = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice;
