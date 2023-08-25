import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { RootState } from "./index";

const supabase = createClientComponentClient();

export interface User {
  isLoggedin: boolean;
  id: string | null;
  email: string | undefined;
  firstname: string | null;
  lastname: string | null;
  profilePicUrl: string | null;
}

const initState: User = {
  isLoggedin: false,
  id: null,
  email: undefined,
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
  extraReducers: (builder) => {
    builder.addCase(
      handleLogout.fulfilled,
      (state, action: PayloadAction<any>) => {
        // anything returned from createAsynchThunk, will be found from action.payload
        console.log("state: ", state);
        window.location.href = "/";
      }
    );
  },
});

export const checkIsUserLoggedIn = createAsyncThunk<
  any,
  any,
  { state: RootState }
>("user/signedIn", async (_, { getState, dispatch }) => {
  const { user } = getState();
  if (user.id) return;
  const { data, error } = await supabase.auth.getUser();

  if (data.user) {
    console.log("inside if, with respone: ", data);
    const currUser: User = {
      isLoggedin: true,
      id: data.user.id,
      email: data.user.email,
      firstname: data.user.user_metadata["firstname"],
      lastname: data.user.user_metadata["lastname"],
      profilePicUrl: null,
    };

    dispatch(userActions.setUser(currUser));
  }
});

export const handleLogout = createAsyncThunk(
  "user/handleLogout",
  async (_, thunkAPI) => {
    await supabase.auth.signOut();
    // thunkAPI.dispatch(userSlice.actions.logOut());
  }
);

export const userActions = userSlice.actions;
export default userSlice.reducer;
