import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import paymentReducer from "./paymentSlice";
import roleReducer from "./roleSlice";
import hambtnReducer from "./HamBurgerBtnSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    role: roleReducer,
    payment: paymentReducer,
    hamBtn: hambtnReducer,
  },
});
