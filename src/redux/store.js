import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataSlice.reducer,
  },
});
