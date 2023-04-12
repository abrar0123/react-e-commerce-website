import { createSlice } from "@reduxjs/toolkit";

const shopFilter = createSlice({
  name: "shopFilter",
  initialState: {
    shopapi: [],
    shopCatagories: [],
  },
  reducers: {
    shopapi: (state, action) => {
      const newProducts = action.payload;
      state.shopapi = newProducts;
    },

    shopCatagories: (state, action) => {
      state.shopCatagories = action.payload;
    },
  },
});
export const shopFilterReducer = shopFilter.reducer;
export const shopActions = shopFilter.actions;
