import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "nnnn@foo.ls",
  id: "1",
  tokken: "1a",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getStatus(state) {
      console.log(state.email);
      console.log(state.id);
      console.log(state.tokken);
    },
  },
});

export const { getStatus } = userSlice.actions;
export default userSlice;
