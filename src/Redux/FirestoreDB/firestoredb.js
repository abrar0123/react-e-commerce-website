import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfige";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const mycollection = collection(db, "users");

export const getFirestoreUsers = createAsyncThunk(
  "users/fetchusers",
  async () => {
    try {
      const data = await getDocs(mycollection);
      const userdata = await data.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      return userdata;
    } catch (error) {}
  }
);

export const deleteFirestoreUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    try {
      const mycollection = doc(db, "users", userId);
      deleteDoc(mycollection);
      return userId;
    } catch (error) {}
  }
);

export const firestoreUsers1 = createAsyncThunk(
  "users/firestoreUsers",

  async () => {
    console.log("myusers__11:", 344);
  }
);

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

    firestoreRead: async (state) => {
      const data = await getDocs(mycollection);
      const userdata = data.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));

      state.users = userdata;
      //   console.log("dkjd", state.users);
    },

    firestoreUpdate: (state, action) => {},
    firestoreDelete: (state, action) => {
      const id = action.payload;
      const mycollection = doc(db, "users", id);
      deleteDoc(mycollection, id);
    },
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
      })
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
      });
  },
});

export const firestoreReducers = firestore.reducer;

export const firestoreActions = firestore.actions;
