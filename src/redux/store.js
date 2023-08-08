import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import data from "./data";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
    auth: authReducer.reducer,
    data: data.reducer,
  },
});
