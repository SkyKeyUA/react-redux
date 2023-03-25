/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterSlice from './slices/counter';

export const store = configureStore({
  reducer: {
    counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;