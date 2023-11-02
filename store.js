import { configureStore } from '@reduxjs/toolkit';
import shoppingBasketReducer from './features/shoppingBasketSlice';

export const store = configureStore({
  reducer: {
    shoppingBasket : shoppingBasketReducer,
  },
})