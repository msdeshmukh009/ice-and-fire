import { createSlice } from "@reduxjs/toolkit";
import { getBooks, getBook } from "./helpers";

const initialState = {
  books: [],
  pageLinks: "",
  isLoading: false,
  error: "",
  bookDetail: {},
  bookIds: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    findBook: (state, { payload: { bookDetailUrl } }) => {
      state.bookDetail = state.books.find(book => book.url === bookDetailUrl);
    },
  },
  extraReducers: {
    [getBooks.pending]: state => {
      state.error = "";
      state.isLoading = true;
    },

    [getBooks.fulfilled]: (state, { payload: { data, pageLinks } }) => {
      state.isLoading = false;
      state.books = data;
      state.pageLinks = pageLinks;
      state.bookIds = data.map(book => book.url.slice(-1));
    },

    [getBooks.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getBook.pending]: state => {
      state.error = "";
      state.isLoading = true;
    },

    [getBook.fulfilled]: (state, { payload: { data } }) => {
      state.isLoading = false;
      state.bookDetail = data;
    },

    [getBook.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { findBook } = booksSlice.actions;

export default booksSlice.reducer;
