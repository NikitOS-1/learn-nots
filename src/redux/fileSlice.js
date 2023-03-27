import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFile = createAsyncThunk(
  "file/fetchFile",

  async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  status: null,
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
  extraReducers: {
    [fetchFile.pending]: (state) => {
      state.status = "Loading...";
      state.file = null;
    },
    [fetchFile.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.file = action.payload;
    },
    [fetchFile.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const { addData } = fileSlice;
export default fileSlice;
