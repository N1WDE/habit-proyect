import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHabits = createAsyncThunk(
  "habits/fetchHabits",
  async () => {
    const response = await fetch("http://localhost:3000/habits");
    return await response.json();
  }
);

const habitSlice = createSlice({
  name: "habits",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchHabits.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default habitSlice.reducer;