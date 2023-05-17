import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';

const rootReducer = {
  auth: authReducer,
  // Otros reducers...
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
