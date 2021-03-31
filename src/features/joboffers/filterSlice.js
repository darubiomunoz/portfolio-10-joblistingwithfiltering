import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Frontend', 'Senior', 'Javascript', 'HTML', 'CSS'];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    deleteFilter: (state, action) => {
      state.filters.filter(filter => filter !== action.payload);
    }
  }
});

export const { deleteFilter } = filterSlice.actions;

export default filterSlice.reducer;