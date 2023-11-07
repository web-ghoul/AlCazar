import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getItem = createAsyncThunk("item/getItem", async (args) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/items/${args.item_id}`
  );
  return res.data.item;
});

const initialState = {
  item: null,
  isLoading: true,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getItem.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload.errorMessage);
      } else {
        console.log(action.error.message);
      }
    });
  },
});

export default itemSlice.reducer;
