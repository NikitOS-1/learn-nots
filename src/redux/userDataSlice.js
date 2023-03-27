import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "data/fetchUserData",

  async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  status: null,
  error: null,
  data: null,
};

const userData = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const { addData } = userData;
export default userData;
