import { RootState } from "@/redux/store";
import { TUser } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface TInitialState {
  user: null | TUser;
  token: null | string;
}

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    userLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});


export const {setUser, userLogout} = authSlice.actions;
export default authSlice.reducer;

export const currentUser = (state: RootState) => state.auth.user; 
export const currentUserToken = (state: RootState) => state.auth.token; 
