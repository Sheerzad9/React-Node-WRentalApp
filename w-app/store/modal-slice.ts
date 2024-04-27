import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: { showRegisterModal: false, showLoginForm: true },
  reducers: {
    closeModal(state) {
      state.showRegisterModal = false;
    },
    openModal(state) {
      state.showRegisterModal = true;
    },
    setFormView(state, action: PayloadAction<{ formView: boolean }>) {
      // Switching between false and true, initially we are showing login form, when "showLoginForm" is set to false, we show Register modal. (See LoginForm & RegisterForm for more)
      state.showLoginForm = action.payload.formView;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
