import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
      uid: null,
      displayName: null,
      email: null,
      photoURL: null,
    },
  };
  

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = {
            ...state.user,
            ...action.payload,
        };
    },        
    clearUser: (state) => {
        state.user = {
            uid: null,
            displayName: null,
            email: null,
            photoURL: null,
        };
    },        
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions


//basket footwear lenght (not working)
export const selectUser = (state) => state.user.user;

export default userSlice.reducer