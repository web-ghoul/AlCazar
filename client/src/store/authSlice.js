import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    token: null,
    userId: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logging: (state, action) => {
            const { token, userId } = action.payload;
            state.token = token
            state.userId = userId
        },
        logout: (state, _) => {
            state.token = null
            state.userId = null
            Cookies.remove("AlCazar_token")
            Cookies.remove("AlCazar_userId")
        }
    },
});

export const { logging, logout } = authSlice.actions
export default authSlice.reducer;
