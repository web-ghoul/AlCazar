import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getDimensions = createAsyncThunk(
    "dimensions/getDimensions",
    async () => {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/dimensions`
        );
        return res.data.dimensions;
    }
);

const initialState = {
    dimensions: [],
    isLoading: true,
};

export const dimensionsSlice = createSlice({
    name: "dimensions",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDimensions.fulfilled, (state, action) => {
            state.dimensions = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getDimensions.rejected, (_, action) => {
            if (action.payload) {
                toast.error(action.payload.errorMessage);
            } else {
                toast.error(action.error.message);
            }
        });
    },
});

export default dimensionsSlice.reducer;
