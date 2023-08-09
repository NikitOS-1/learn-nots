import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectID: "",
  isModalOpen: false,
};

const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalReducer.actions;

export const isModalOpen = (state) => state.modal.isModalOpen;
export const selectID = (state) => state.modal.selectID;

export default modalReducer;
