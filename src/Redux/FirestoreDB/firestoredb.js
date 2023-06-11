import { createSlice } from "@reduxjs/toolkit";
import {
  getFirestoreUsers,
  deleteFirestoreUser,
  insertIntoFirestore,
} from "./firebaseApi";

const firestore = createSlice({
  name: "firestore",
  initialState: {
    users: [],
    loading: false,
    error: null,
    pesa: 3004000,
  },

  reducers: {
    firestoreInsert: (state, action) => {},

    firestoreUpdate: (state, action) => {},
    firestoreDelete: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFirestoreUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFirestoreUsers.fulfilled, (state, actions) => {
        state.loading = false;
        state.users = actions.payload;
      })
      .addCase(getFirestoreUsers.rejected, (state, actions) => {
        state.loading = false;

        state.error = actions.error.message;
      }) // delete record
      .addCase(deleteFirestoreUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFirestoreUser.fulfilled, (state, action) => {
        state.loading = false;
        const userId = action.payload;
        state.users = state.users.filter((user) => user.id !== userId);
      })
      .addCase(deleteFirestoreUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }) // insert record
      .addCase(insertIntoFirestore.pending, (state) => {
        state.loading = true;
      })
      .addCase(insertIntoFirestore.fulfilled, (state, action) => {
        state.loading = false;
        
        // const userRecord = action.payload;
    
      })
      .addCase(insertIntoFirestore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const firestoreReducers = firestore.reducer;

export const firestoreActions = firestore.actions;
