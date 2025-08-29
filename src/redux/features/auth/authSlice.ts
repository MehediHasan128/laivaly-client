import { RootState } from "@/redux/store";
import { TUser } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface TInitialState {
  user: null | TUser;
}

const initialState: TInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    userLogout: (state) => {
      state.user = null;
    },
  },
});


export const {setUser, userLogout} = authSlice.actions;
export default authSlice.reducer;

export const currentUser = (state: RootState) => state.auth.user; 