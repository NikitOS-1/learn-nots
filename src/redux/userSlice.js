import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const fetchUserData = createAsyncThunk(
  "user/fetchUserData",

  onAuthStateChanged(auth, (user) => {
    console.log(user);
  })
);

const initialState = {
  email: null,
  id: null,
  tokken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, actions) {
      state.email = actions.payload.email;
      state.id = actions.payload.id;
      state.tokken = actions.payload.tokken;
      localStorage.setItem("isLogin", true);
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.tokken = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {},
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice;
