/** @format */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export interface UsersState {
  user: Users[];
}

const initialState: UsersState = {
  user: [],
};

export const fetchUsers = createAsyncThunk<Users[]>('users/fetchUsersStatus', async () => {
  const { data } = await axios.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  return data as Users[];
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addAllUsers(state, action: PayloadAction<Users[]>) {
      state.user = action.payload;
    },
    addUser(state, action: PayloadAction<Users>) {
      state.user = [...state.user, action.payload];
    },
    removeUser(state, action: PayloadAction<string>) {
      state.user = state.user.filter(
        (obj) => obj.username?.toLowerCase() !== action.payload?.toLowerCase(),
      );
    },
    removeCustomer(state, action: PayloadAction<number>) {
      state.user = state.user.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.user = [];
      console.log('Data is being sent');
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(state, 'All Good');
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.user = [];
      console.log('Was Error');
    });
  },
});

export const selectUsers = (state: RootState) => state.usersSlice;

export const { addAllUsers, removeUser, addUser, removeCustomer } = usersSlice.actions;

export default usersSlice.reducer;
