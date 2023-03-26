import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userDataSlice from "./userDataSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userData: userDataSlice.reducer,
  },
});
