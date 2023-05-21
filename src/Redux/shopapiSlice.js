import { createSlice } from "@reduxjs/toolkit";

const shopFilter = createSlice({
  name: "shopFilter",
  initialState: {
    shopapi: [],
    shopCatagories: [],
    searchedProducts: [],
  },
  reducers: {
    shopapi: (state, action) => {
      const newProducts = action.payload;
      state.shopapi = newProducts;
    },

    shopCatagories: (state, action) => {
      state.shopCatagories = action.payload;
    },
    searchProduct: (state, action) => {
      const newProducts = action.payload;
      state.searchedProducts = newProducts;
    },
 
  },
});
export const shopFilterReducer = shopFilter.reducer;
export const shopActions = shopFilter.actions;
