import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      return state.filter((item) => item?.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
