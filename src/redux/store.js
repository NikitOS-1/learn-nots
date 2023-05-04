import { configureStore } from "@reduxjs/toolkit";
import dayOrNightSlice from "./dayOrNightSlice";

export const store = configureStore({
  reducer: {
    theme: dayOrNightSlice.reducer,
  },
});
