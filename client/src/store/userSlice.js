import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async (args) => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/user/${args.userId}`,
        {
            headers: {
                "Authorization": `Bearer ${args.token}`
            }
        }
    )
    return res.data;
});

const initialState = {
    user: null,
    userAddresses: [],
    userOrders: [],
    userSubscriptions: [],
    isLoading: true,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.userAddresses = action.payload.addresses;
            state.userOrders = action.payload.orders;
            state.userSubscriptions = action.payload.subscriptions;
            state.isLoading = false;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = true;
            if (action.payload) {
                console.log(action.payload.errorMessage);
            } else {
                console.log(action.error.message);
            }
        });
    },
});

export default userSlice.reducer;
