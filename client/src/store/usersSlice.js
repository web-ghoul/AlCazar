import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const getUsers = createAsyncThunk("users/getUsers", async (args) => {
    let users = []
    await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/users`,
        {
            headers: {
                "Authorization": `Bearer ${args.token}`
            }
        }
    ).then((res) => {
        try {
            users = res.data.users
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
    return users;
});

const initialState = {
    users: [],
    isLoading: true,
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = true;
            if (action.payload) {
                toast.error(action.payload.errorMessage);
            } else {
                toast.error(action.error.message);
            }
        });
    },
});

export default usersSlice.reducer;
