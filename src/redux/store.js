import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import data from "./data";
import modalReducer from "./modalReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
    auth: authReducer.reducer,
    data: data.reducer,
    modal: modalReducer.reducer,
  },
});
