import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCars,
} from './operations';

const initialState = {
  cars:[],
  favorites:[],
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfildGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar(state, action) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    deleteCar(state, action) {
     return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload.id),
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFulfildGet)
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
  },
});


export const { addCar, deleteCar } = carsSlice.actions;