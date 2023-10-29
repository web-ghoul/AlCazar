import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const getProfile = createAsyncThunk("profile/getProfile", async (args) => {
    let profile = null
    try {
        const userId = Cookies.get("AlCazar_userId")
        const token = Cookies.get("AlCazar_token")
        await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${userId}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        ).then((res) => {
            try {
                profile = res.data.user
            } catch (error) {
                toast.error(error.message)
            }
        }).catch((err) => {
            let msg;
            try {
                msg = err.response.data.error
                toast.error(msg);
            } catch (error) {
                msg = error.message
                toast.error(msg);
            }
            if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
                Cookies.remove("AlCazar_token")
                Cookies.remove("AlCazar_userId")
                window.location.href = "/login"
            }
        })
    } catch (error) {
        toast.error(error.message)
    }
    return profile;
});

const initialState = {
    profile: null,
    isLoading: true,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            state.isLoading = true;
            if (action.payload) {
                toast.error(action.payload.errorMessage);
            } else {
                toast.error(action.error.message);
            }
        });
    },
});

export default profileSlice.reducer;
