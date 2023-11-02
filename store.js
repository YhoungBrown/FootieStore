import { configureStore } from '@reduxjs/toolkit';
import shoppingBasketReducer from './features/shoppingBasketSlice';
import deliveryReducer from './features/deliverySlice';

export const store = configureStore({
  reducer: {
    shoppingBasket : shoppingBasketReducer,
    delivery: deliveryReducer,
  },
})