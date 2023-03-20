import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  tokken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
