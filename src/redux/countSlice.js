import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    inc(state) {
      state.counter++;
      if (state.counter >= 5) {
        state.counter = 5;
      }
    },
    dec(state) {
      state.counter--;
      if (state.counter <= 0) {
        state.counter = 0;
      }
    },
  },
});
export const { inc, dec } = countSlice.actions;
export default countSlice;
