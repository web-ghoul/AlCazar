import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const getUser = createAsyncThunk("user/getUser", async (args) => {
    let user = null
    await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${args.userId}`,
        {
            headers: {
                "Authorization": `Bearer ${args.token}`
            }
        }
    ).then((res) => {
        try {
            user = res.data.user
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
    return user;
});

const initialState = {
    user: null,
    isLoading: true,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = true;
            if (action.payload) {
                toast.error(action.payload.errorMessage);
            } else {
                toast.error(action.error.message);
            }
        });
    },
});

export default userSlice.reducer;
