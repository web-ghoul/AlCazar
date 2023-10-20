import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getItem = createAsyncThunk("item/getItem", async (_, args) => {
  console.log(args);
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/items${args.item_id}`
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getItem.rejected, (_, action) => {
      if (action.payload) {
        toast.error(action.payload.errorMessage);
      } else {
        toast.error(action.error.message);
      }
    });
  },
});

export default itemSlice.reducer;
