import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: { showRegisterModal: false },
  reducers: {
    closeModal(state) {
      state.showRegisterModal = false;
    },
    openModal(state) {
      state.showRegisterModal = true;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
