/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './asyncActions';
import { Status, Users, UsersState } from './type';

const initialState: UsersState = {
  user: [],
  status: Status.LOADING, // loading \ success \ error
};

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
      state.status = Status.LOADING;
      state.user = [];
      console.log('Data is being sent');
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.user = action.payload;
      console.log(state, 'All Good');
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = Status.ERROR;
      state.user = [];
      console.log('Was Error');
    });
  },
});

export const { addAllUsers, removeUser, addUser, removeCustomer } = usersSlice.actions;

export default usersSlice.reducer;
