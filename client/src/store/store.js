import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from "./itemsSlice"

export const store = configureStore({
  reducer: {
    items:itemsReducer
  },
})