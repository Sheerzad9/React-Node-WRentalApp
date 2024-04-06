import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { RootState } from "./index";
import { loadSpinnerActions } from "./loadspinner-slice";

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
    builder.addCase(handleLogout.fulfilled, (state, action: PayloadAction<any>) => {
      // anything returned from createAsynchThunk, will be found from action.payload
      console.log("state: ", state);
      window.location.href = "/";
    });
  },
});

export const checkIsUserLoggedIn = createAsyncThunk<any, any, { state: RootState }>("user/signedIn", async (_, { getState, dispatch }) => {
  const { user } = getState();
  if (user.id) return;
  const { data, error } = await supabase.auth.getUser();

  if (data.user) {
    const currUser = await fetchUserWithIdFromDB(data.user.id);

    dispatch(userActions.setUser(currUser));
  }
});

export const setUserById = createAsyncThunk("user/setUserById", async (userId: string, thunkAPI) => {
  const user: User = await fetchUserWithIdFromDB(userId);

  thunkAPI.dispatch(userActions.setUser(user));
});

const fetchUserWithIdFromDB = async (userId: string): Promise<User> => {
  const { data: profile, error } = await supabase.from("profile").select("*").eq("id", userId).maybeSingle();

  if (error) console.log("ERROR FETCHING USER WITH ID IN SLICE: ", error);

  const user: User = {
    isLoggedin: true,
    id: profile.id,
    email: profile.email,
    firstname: profile.firstname,
    lastname: profile.lastname,
    profilePicUrl: profile.profile_image,
  };
  return user;
};

export const handleLogout = createAsyncThunk("user/handleLogout", async (_, thunkAPI) => {
  thunkAPI.dispatch(loadSpinnerActions.showLoadSpinner());
  await supabase.auth.signOut();
  thunkAPI.dispatch(loadSpinnerActions.hideLoadSpinner());
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
