import { createSlice } from "@reduxjs/toolkit";

const loadSpinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState: { showSpinner: false },
  reducers: {
    showLoadSpinner(state) {
      state.showSpinner = true;
    },
    hideLoadSpinner(state) {
      state.showSpinner = false;
    },
  },
});

export const loadSpinnerActions = loadSpinnerSlice.actions;
export default loadSpinnerSlice.reducer;
