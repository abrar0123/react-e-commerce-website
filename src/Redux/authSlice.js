import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    authLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    authLogout: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
