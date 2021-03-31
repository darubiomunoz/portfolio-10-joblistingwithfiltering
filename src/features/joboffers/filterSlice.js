import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Frontend', 'Senior'];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {}
});

export default filterSlice.reducer;