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
        state.footwears[index].price = state.footwears[index].initialPrice * state.footwears[index].quantity; // Recalculate the price based on the new quantity
      } else {
        action.payload.price = action.payload.initialPrice * action.payload.quantity; // Calculate the price for the new item
        state.footwears = [...state.footwears, action.payload];
      }
    },        
    removeFootwear: (state, action) => {
      const index = state.footwears.findIndex((footwear) => footwear.id === action.payload.id);
    
      if (index >= 0) {
        let newShoppingBasket = [...state.footwears];
    
        if (newShoppingBasket[index].quantity > 1) {
          newShoppingBasket[index].quantity -= 1;
          newShoppingBasket[index].price = newShoppingBasket[index].initialPrice * newShoppingBasket[index].quantity;
        } else {
          newShoppingBasket.splice(index, 1);
        }
    
        state.footwears = newShoppingBasket;
      } else {
        console.warn(`Can't remove product ${action.payload.id} as it's not in the basket`);
      }
    },
    setFootwear: (state, action) => {
      state.footwears = action.payload;
    },   
    clearShoppingBasket: (state) => {
      state.footwears = [];
    },   
  },
})

// Action creators are generated for each case reducer function
export const { addFootwear, removeFootwear, setFootwear, clearShoppingBasket} = shoppingBasketSlice.actions

//ShoppingBasket footwear selected N price total;
export const selectShoppingBasketTotal = (state) => 
state.shoppingBasket.footwears.reduce((total, footwear) => total + footwear.price, 0);

//basket footwear lenght (not working)
export const selectShoppingBasket = ((state) => state.shoppingBasket.footwears);

export default shoppingBasketSlice.reducer