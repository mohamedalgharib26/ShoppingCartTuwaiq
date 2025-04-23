import { configureStore } from '@reduxjs/toolkit'
 
import CartReducer from "./slices/cartSilce";

export const store = configureStore({
  reducer: {
    cart:CartReducer,
  },
})