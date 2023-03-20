import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
  tokken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.tokken = action.payload.tokken;
    },
    removeUser(state){
        state.email= null,
        state.id= null,
        state.tokken= null,
    }
  },
});

export const {setUser,removeUser} = userSlice.actions

export default userSlice