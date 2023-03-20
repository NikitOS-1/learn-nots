import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "nnnn",
  id: "1",
  tokken: "2",
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

export default userSlice;
