import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      return response.data;
    } catch (error) {}
  }
);

const shopFilter = createSlice({
  name: "shopFilter",
  initialState: {
    shopapi: [],
    shopCatagories: [],
    searchedProducts: [],

    data: [],
    loading: false,
    error: null,
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
  extraReducers: (builder) => {
    // Handle the fetchProducts async thunk
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const shopFilterReducer = shopFilter.reducer;
export const shopActions = shopFilter.actions;
