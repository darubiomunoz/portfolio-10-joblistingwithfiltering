import { configureStore } from "@reduxjs/toolkit";

import jobOffersReducer from "../features/joboffers/jobOffersSlice";
import filtersReducer from "../features/filters/filtersSlice";

const store =  configureStore({
  reducer: {
    joboffers: jobOffersReducer,
    filters: filtersReducer,
  },
});

export default store;