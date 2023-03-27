import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.file = action.payload;
    },
  },
});
export const { addData } = fileSlice;
export default fileSlice;
