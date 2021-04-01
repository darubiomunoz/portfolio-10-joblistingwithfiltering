import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      return state.push(action.payload);
    },
    deleteFilter: (state, action) => {
      return state.filter(item => item !== action.payload.category);
    },
    clearFilter: (state) => {
      return state = [];
    }
  }
});

export const { addFilter, deleteFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
