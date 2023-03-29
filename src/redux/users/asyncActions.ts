/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Users } from './type';

export const fetchUsers = createAsyncThunk<Users[]>('users/fetchUsersStatus', async () => {
  const { data } = await axios.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  return data as Users[];
});
