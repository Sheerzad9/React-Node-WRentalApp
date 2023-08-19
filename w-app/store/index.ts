import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import useReducer from "./user-slice";

const store = configureStore({
  reducer: { modal: modalReducer, user: useReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
