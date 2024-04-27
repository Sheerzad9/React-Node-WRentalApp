import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import userReducer from "./user-slice";
import spinnerReducer from "./loadspinner-slice";

const store = configureStore({
  reducer: { modal: modalReducer, user: userReducer, spinner: spinnerReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
