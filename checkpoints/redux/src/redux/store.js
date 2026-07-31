import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

/**
 * Configure Redux Store
 */
export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
