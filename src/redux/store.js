import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userDataSlice";
import fileSlice from "./fileSlice";
import dayOrNightSlice from "./dayOrNightSlice";

export const store = configureStore({
  reducer: {
    theme: dayOrNightSlice.reducer,
  },
});
