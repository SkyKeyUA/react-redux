/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCashFromLS } from '../../utils/getCashFromLS';
import { RootState } from '../store';

export interface CounterState {
  cash: number;
}

const initialState: CounterState = {
  cash: getCashFromLS(),
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCash(state, action: PayloadAction<number>) {
      state.cash = action.payload;
    },
    addCash(state, action: PayloadAction<number>) {
      state.cash = state.cash + action.payload;
    },
    getCash(state, action: PayloadAction<number>) {
      state.cash = state.cash - action.payload;
    },
  },
});

export const selectCounter = (state: RootState) => state.counterSlice;

export const { setCash, addCash, getCash } = counterSlice.actions;

export default counterSlice.reducer;
