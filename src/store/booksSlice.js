import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "./../api/index";

export const getAllBooksThunk = createAsyncThunk(
  "books/getAllBooksThunk",
  async (options, thunkAPI) => {
    try {
      const response = await getAllBooks(options);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const booksSlice = createSlice({
  name: "books",
  initialState: { items: [], isPending: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.pending, (state) => {
      state.isPending = true;
      state.error = null;
    });
    builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isPending = false;
      state.error = null;
    });
    builder.addCase(getAllBooksThunk.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
  },
});

export default booksSlice.reducer;
