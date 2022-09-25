import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getBooks = createAsyncThunk("books/getBooks", async ({ url }, { rejectWithValue }) => {
  try {
    const { status, data, headers } = await axios.get(url);

    if (status === 200) {
      return { data, pageLinks: headers.link };
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getBooks };
