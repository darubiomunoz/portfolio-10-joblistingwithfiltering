import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  roles: [],
  levels: [],
  languages: [],
  tools: [],
};

const roles = ["Frontend", "Backend", "Fullstack"];
const levels = ["Junior", "Midweight", "Senior"];
const languages = ["HTML", "CSS", "JavaScript", "Python"];
const tools = ["React", "Sass", "Ruby", "RoR", "Vue", "Django"];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const { category } = action.payload;

      if (!state.isActive) state.isActive = true;

      if (roles.includes(category) && !state.roles.includes(category)) state.roles.push(category);
      if (levels.includes(category) && !state.levels.includes(category))
        state.levels.push(category);
      if (languages.includes(category) && !state.languages.includes(category))
        state.languages.push(category);
      if (tools.includes(category) && !state.tools.includes(category))
        state.tools.push(category);
    },
    deleteCategory: (state, action) => {
      return state.filter((item) => item !== action.payload.category);
    },
    clearFilters: (state) => {
      return (state = initialState);
    },
  },
});

export const {
  addCategory,
  deleteCategory,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
