import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import toast from "react-hot-toast";

export const getItems = createAsyncThunk("items/getItems", async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/items`
  );
  return res.data.items;
});

const initialState = {
  items: [],
  isLoading: true,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getItems.rejected, (_, action) => {
      //   if (action.payload) {
      //     toast.error(action.payload.errorMessage);
      //   } else {
      //     toast.error(action.error);
      //   }
    });
  },
});

export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
