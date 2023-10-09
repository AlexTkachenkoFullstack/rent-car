import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65217aefa4199548356d4398.mockapi.io/advert',
});


export const fetchCars = createAsyncThunk(
  'cars/get',
  async (_, thunkAPI) => {
    try {
      const response = await instance('/');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);