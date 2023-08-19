import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  isLoggedin: boolean;
  id: string | null;
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  profilePicUrl: string | null;
}

const initState: User = {
  isLoggedin: false,
  id: null,
  email: null,
  firstname: null,
  lastname: null,
  profilePicUrl: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return (state = action.payload);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
