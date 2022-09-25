import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getBook = createAsyncThunk("books/getBook", async ({ url }, { rejectWithValue }) => {
  try {
    const { status, data } = await axios.get(url);

    if (status === 200) {
      return { data };
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getBook };
