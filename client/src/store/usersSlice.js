import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async (args) => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/users`,
        {
            headers: {
                "Authorization": `Bearer ${args.token}`
            }
        }
    )
    return res.data.users;
});

const initialState = {
    users: [],
    isLoading: true,
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = true;
            if (action.payload) {
                console.log(action.payload.errorMessage);
            } else {
                console.log(action.error.message);
            }
        });
    },
});

export default usersSlice.reducer;
