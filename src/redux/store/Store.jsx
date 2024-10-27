import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice"
import productReducer from "../features/ProductSlice"

const store=configureStore({
      reducer: {
            cart : cartSlice,
            product:productReducer
            
      }
})

export default store;