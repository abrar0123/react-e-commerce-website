import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shopCart: [],
    cartItems: 0,
    showModel: false,
    searchedProducts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.shopCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex === -1) {
        state.shopCart.push(newProduct);
        state.cartItems++;
      } else {
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

    searchProduct: (state, action) => {
      const newProducts = action.payload;
      state.searchedProducts = newProducts;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
