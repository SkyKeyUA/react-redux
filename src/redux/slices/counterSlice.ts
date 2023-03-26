/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCashFromLS } from '../../utils/getCashFromLS';
import { RootState } from '../store';

export interface CounterState {
  cash: number;
  user: string[];
}

const initialState: CounterState = {
  cash: getCashFromLS(),
  user: [],
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
    addUser(state, action: PayloadAction<string>) {
      state.user = [...state.user, action.payload];
    },
    removeUser(state, action: PayloadAction<string>) {
      state.user = state.user.filter((obj) => obj.toLowerCase() !== action.payload.toLowerCase());
    },
    removeCustomer(state, action: PayloadAction<number>) {
      state.user = state.user.filter((_, index) => index !== action.payload);
    },
  },
});

export const selectCounter = (state: RootState) => state.counterSlice;

export const { removeUser, addUser, setCash, addCash, getCash, removeCustomer } =
  counterSlice.actions;

export default counterSlice.reducer;
