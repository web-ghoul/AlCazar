import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import itemReducer from "./itemSlice";
import itemsReducer from "./itemsSlice";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
    items: itemsReducer,
    user: userReducer,
    users: usersReducer,
    categories: categoriesReducer,
  },
});
