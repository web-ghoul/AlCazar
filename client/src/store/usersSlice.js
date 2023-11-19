import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async (args) => {
    let queries = ""
    if (args && args.search) {
        if (queries.length > 0) {
            queries += "&"
        } else {
            queries += "?"
        }
        queries += "search=" + args.search
    }
    if (args && args.sort) {
        if (queries.length > 0) {
            queries += "&"
        } else {
            queries += "?"
        }
        queries += "sort=" + args.sort
    }
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/users${queries}`,
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
