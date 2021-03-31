import { configureStore } from '@reduxjs/toolkit';

import jobOffersReducer from '../features/joboffers/jobOffersSlice';

export default configureStore({
  reducer: {
    joboffers: jobOffersReducer,
  }
});