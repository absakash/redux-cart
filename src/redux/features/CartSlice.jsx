import { createSlice } from "@reduxjs/toolkit";

const initialCart = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // Add the product to the cart
    },
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload); // Remove the product by id
    },
    totalPrice: (state) => {
      // Calculate the total price of items in the cart
      return state.reduce((total, item) => total + (item.price * item.quantity || 1), 0);
    }
  }
});

export default cartSlice.reducer;
export const { addToCart, remove, totalPrice } = cartSlice.actions;
