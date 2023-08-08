import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "books"));
    const dataArray = querySnapshot.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return dataArray;
  } catch (error) {
    throw new Error("some errors", error);
  }
});

const initialState = {
  data: [],
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});
export const {} = dataSlice.actions;

export const selectData = (state) => state.data.data;

export default dataSlice;
