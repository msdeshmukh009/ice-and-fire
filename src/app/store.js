import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/books/booksSlice";

export const store = configureStore({
  reducer: {
    booksData: booksSlice,
  },
});
