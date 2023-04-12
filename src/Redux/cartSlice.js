import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shopCart: [],
    cartItems: 0,
    showModel: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.shopCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex === -1) {
        state.shopCart.push(newProduct);
        state.cartItems++;
      } else {
        state.shopCart[findIndex].quant < 10 &&
          state.shopCart[findIndex].quant++;
        state.shopCart[findIndex].subtotal =
          state.shopCart[findIndex].price * state.shopCart[findIndex].quant;
        state.cartItems++;
      }
    },

    removeToCart: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.shopCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex !== -1) {
        if (state.shopCart[findIndex].quant > 0) {
          state.shopCart[findIndex].quant--;
          state.shopCart[findIndex].subtotal =
            state.shopCart[findIndex].price * state.shopCart[findIndex].quant;
          state.cartItems--;
        }
      }
    },

    deleteProduct: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.shopCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex !== -1) {
        state.shopCart.splice(findIndex, 1);
      }
    },

    cartModel: (state, action) => {
      console.log("click handler");

      const model = action.payload.data;
      state.showModel = model;
    },
  },
});
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const persistcartReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);

// export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
