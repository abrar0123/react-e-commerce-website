import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistcartReducer } from "../cartSlice";
import { authReducer } from "../authSlice";
import { shopFilterReducer } from "../shopapiSlice";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  cart: persistcartReducer,
  auth: authReducer,
  shop: shopFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persiststore = persistStore(store);
