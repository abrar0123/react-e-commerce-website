import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../cartSlice";
import { authReducer } from "../authSlice";
import { shopFilterReducer } from "../shopapiSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  shop: shopFilterReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
