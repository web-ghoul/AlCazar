import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import itemReducer from "./itemSlice";
import itemsReducer from "./itemsSlice";
import profileReducer from "./profileSlice";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import categoriesReducer from "./categoriesSlice";
import citiesReducer from "./citiesSlice";
import countriesReducer from "./countriesSlice";
import dimensionsReducer from "./dimensionsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
    items: itemsReducer,
    profile: profileReducer,
    user: userReducer,
    users: usersReducer,
    categories: categoriesReducer,
    cities: citiesReducer,
    countries: countriesReducer,
    dimensions: dimensionsReducer,
  },
});
