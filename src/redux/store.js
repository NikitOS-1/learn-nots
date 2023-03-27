import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userDataSlice";
import fileSlice from "./fileSlice";

export const store = configureStore({
  reducer: {
    file: fileSlice.reducer,
    userData: userDataSlice.reducer,
  },
});
