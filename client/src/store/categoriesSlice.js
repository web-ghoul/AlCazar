import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (args) => {
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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/categories${queries}`
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
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload.errorMessage);
      } else {
        console.log(action.error.message);
      }
    });
  },
});

export default categoriesSlice.reducer;
