import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  footwears: [],
}

export const shoppingBasketSlice = createSlice({
  name: 'shoppingBasket',
  initialState,
  reducers: {
    addFootwear: (state, action) => {
      const index = state.footwears.findIndex((footwear) => footwear.id === action.payload.id);
    
      if (index !== -1) { // Check if index is not -1 (i.e., item with the same ID exists)
        state.footwears[index].quantity += action.payload.quantity; // Add the new quantity
        state.footwears[index].price = state.footwears[index].price * state.footwears[index].quantity; // Recalculate the price based on the new quantity
      } else {
        state.footwears = [...state.footwears, action.payload];
      }      
    },    
    removeFootwear: (state, action) => {
      const index = state.footwears.findIndex((footwear) => footwear.id === action.payload.id);

      let newShoppingBasket = [...state.footwears]

      if (index >= 0){
        newShoppingBasket.splice(index, 1);
      } else{
        console.warn(`can't remove product ${action.payload.id} as it's not in basket`)};

        state.footwears = newShoppingBasket
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFootwear, removeFootwear } = shoppingBasketSlice.actions

//ShoppingBasket footwear selected N price total;
export const selectShoppingBasketTotal = (state) => 
state.shoppingBasket.footwears.reduce((total, footwear) => total + footwear.price, 0);

//basket footwear lenght (not working)
export const selectShoppingBasket = ((state) => state.shoppingBasket.footwears);

export default shoppingBasketSlice.reducer