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

      if (roles.includes(category) && !state.roles.includes(category))
        state.roles.push(category);
      if (levels.includes(category) && !state.levels.includes(category))
        state.levels.push(category);
      if (languages.includes(category) && !state.languages.includes(category))
        state.languages.push(category);
      if (tools.includes(category) && !state.tools.includes(category))
        state.tools.push(category);
    },
    deleteCategory: (state, action) => {
      const { category } = action.payload;

      if (roles.includes(category)) {
        let index = state.roles.indexOf(category);
        state.roles.splice(index, 1);
      }
      if (levels.includes(category)) {
        let index = state.levels.indexOf(category);
        state.levels.splice(index, 1);
      }
      if (languages.includes(category)) {
        let index = state.languages.indexOf(category);
        state.languages.splice(index, 1);
      }
      if (tools.includes(category)) {
        let index = state.tools.indexOf(category);
        state.tools.splice(index, 1);
      }

      const empty =
        state.roles.length === 0 &&
        state.levels.length === 0 &&
        state.languages.length === 0 &&
        state.tools.length === 0;

      if (empty) state.isActive = false;
    },
    clearFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  addCategory,
  deleteCategory,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
