import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebaseConfige";
import { createAsyncThunk } from "@reduxjs/toolkit";

const mycollection = collection(db, "users");

//  get record from firebase

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

//  delete record from firebase

export const deleteFirestoreUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    try {
      const mycollection1 = doc(db, "users", userId);
      deleteDoc(mycollection1);
      return userId;
    } catch (error) {}
  }
);

//  insert record from firebase

export const insertIntoFirestore = createAsyncThunk(
  "users/adduser",
  async (userData) => {
    try {
      const data = await addDoc(mycollection, {
        email: userData.email,
        password: userData.password,
        username: userData.username,
      });
      return data;
    } catch (error) {}
  }
);


//  edited record from firebase

export const modifytFirestoreUser = createAsyncThunk(
    "users/adduser",
    async (userData) => {
      try {
        
      } catch (error) {}
    }
  );
  


