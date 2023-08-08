import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "books"));

    const dataArray = [];

    querySnapshot.forEach((doc) => {
      dataArray.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return dataArray;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  data: [],
  error: null,
  status: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {} = dataSlice.actions;

export default dataSlice;
