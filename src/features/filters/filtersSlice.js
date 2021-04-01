import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Frontend', 'Senior', 'Javascript', 'HTML', 'CSS'];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    deleteFilter: (state, action) => {
      return state.filter(item => item !== action.payload.category);
    },
    clearFilter: (state) => {
      return state = [];
    }
  }
});

export const { deleteFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;