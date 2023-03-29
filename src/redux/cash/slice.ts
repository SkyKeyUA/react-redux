/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCashFromLS } from '../../utils/getCashFromLS';
import { CashState } from './type';

const initialState: CashState = {
  cash: getCashFromLS(),
};

export const cashSlice = createSlice({
  name: 'cash',
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

export const { setCash, addCash, getCash } = cashSlice.actions;

export default cashSlice.reducer;
