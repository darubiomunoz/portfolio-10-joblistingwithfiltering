import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Frontend', 'Senior', 'Javascript', 'HTML', 'CSS'];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {}
});

export default filterSlice.reducer;