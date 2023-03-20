import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    // userReducer: userSlice.reducer,
    count: countSlice.reducer,
  },
});
