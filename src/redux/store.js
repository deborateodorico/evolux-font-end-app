import { configureStore } from '@reduxjs/toolkit';
import didsReducer from './didsSlice';

export default configureStore({
  reducer: {
    dids: didsReducer,
  },
});
