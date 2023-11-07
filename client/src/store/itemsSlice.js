import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("items/getItems", async (args) => {
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
  if (args && args.category) {
    if (queries.length > 0) {
      queries += "&"
    } else {
      queries += "?"
    }
    queries += "category=" + args.category
  }
  if (args && args.dimension) {
    if (queries.length > 0) {
      queries += "&"
    } else {
      queries += "?"
    }
    queries += "dimension=" + args.dimension
  }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/items${queries}`
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
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getItems.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload.errorMessage);
      } else {
        console.log(action.error.message);
      }
    });
  },
});

export default itemsSlice.reducer;
