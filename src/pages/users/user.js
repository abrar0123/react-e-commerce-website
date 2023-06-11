import React, { useEffect, useState } from "react";
import "./user.css";
import Userdetails from "./Userdetails";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfige";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchProducts1,
  firestoreActions,
  firestoreUsers,
  getFirestoreUsers,
  getUsers,
} from "../../Redux/FirestoreDB/firestoredb";
import { fetchProducts } from "../../Redux/shopapiSlice";

export default function User() {
  const [users, setusers] = useState([]);
  const dbusers = useSelector((state) => state.firestore.users);
  const dbloading = useSelector((state) => state.firestore.loading);
  const dberr = useSelector((state) => state.firestore.error);

  console.log("users22_", dbusers, dbloading, dberr);
  const mycollection = collection(db, "users");

  const Dispatch = useDispatch();

  const reabdb = () => {
    Dispatch(firestoreActions.firestoreRead());
  };

  useEffect(() => {
    Dispatch(getFirestoreUsers());
  }, [Dispatch]);

  // useEffect(() => {
  //   const getALLUsers = async () => {
  //     try {
  //       const data = await getDocs(mycollection);
  //       const data1 = await data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log("mydata__1:", data.docs);
  //       setusers(data1);
  //     } catch (error) {
  //       console.log("mydata__1:", error);
  //     }
  //   };

  //   getALLUsers();
  // }, []);

  const getusers = async () => {
    const data = await getDocs(mycollection);

    console.log("mydata__:", data.docs[0]._document);

    const arr = [];
    for (let p of data.docs) {
      arr.push(p._document.data.value.mapValue.fields);
    }
    console.log("arr__", arr);
    setusers(arr);
    // data.docs[0]._document.data.value.mapValue.fields
  };

  console.log("users__", users);

  return (
    <div className="user">
      <div className="userItem">
        <h2> Welcome to Admin Panel </h2>
      </div>
      <Userdetails users={dbusers} loading={dbloading} />
    </div>
  );
}
