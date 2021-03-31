import { configureStore } from "@reduxjs/toolkit";

import jobOffersReducer from "../features/joboffers/jobOffersSlice";
import filterReducer from "../features/joboffers/filterSlice";

export default configureStore({
  reducer: {
    joboffers: jobOffersReducer,
    filters: filterReducer,
  },
});
