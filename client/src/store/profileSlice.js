import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
    const token = Cookies.get("AlCazar_token")
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    return res.data;
});

const initialState = {
    profile: null,
    profileAddresses: [],
    profileOrders: [],
    isLoading: true,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        resetProfile: (state) => {
            state.profile = null
            state.profileAddresses = []
            state.profileOrders = []
            state.profileSubscriptions = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload.user;
            state.profileAddresses = action.payload.addresses;
            state.profileOrders = action.payload.orders;
            state.profileSubscriptions = action.payload.subscriptions;
            state.isLoading = false;
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            state.isLoading = true;
            if (action.payload) {
                console.log(action.payload.errorMessage);
            } else {
                console.log(action.error.message);
            }
        });
    },
});
export const { resetProfile } = profileSlice.actions
export default profileSlice.reducer;
