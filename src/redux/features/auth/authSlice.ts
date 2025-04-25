import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type Tuser = {
  userEmail: string;
  userId: string;
  id: string;
  profileImage: string;
  role: string;
};

type TInitalState = {
    user: null | Tuser;
    token: null | string;
}

const initialState: TInitalState = {
    user: null,
    token: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {user, token} = action.payload;
            state.user = user;
            state.token = token;
        },
        userSignOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const {setUser, userSignOut} = authSlice.actions;
export default authSlice.reducer;

export const currentUser = (state: RootState) => state.auth.user;
export const currentUserToken = (state: RootState) => state.auth.token;
