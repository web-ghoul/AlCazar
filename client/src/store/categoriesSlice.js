import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/categories`
    );
    return res.data.categories;
  }
);

const initialState = {
  categories: [],
  isLoading: true,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (_, action) => {
      if (action.payload) {
        toast.error(action.payload.errorMessage);
      } else {
        toast.error(action.error.message);
      }
    });
  },
});

export default categoriesSlice.reducer;
