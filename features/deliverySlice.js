import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: [],
}

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    addDeliveryAdress: (state, action) => {
      state.address = action.payload

    },        
  },
})

// Action creators are generated for each case reducer function
export const { addDeliveryAdress } = deliverySlice.actions


//basket footwear lenght (not working)
export const selectDeliveryAddress = ((state) => state.delivery.address);

export default deliverySlice.reducer