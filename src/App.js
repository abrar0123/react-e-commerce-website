import React, { useEffect, useState } from "react";
import UserAccount from "./pages/UserAccount/userAccount";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./Redux/shopapiSlice";
import { db } from "./firebaseConfige";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const Dispatch = useDispatch();
  
  return (
    <React.Fragment>
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Email : {users?.email?.stringValue},</h1>
        <h1>Password : {users?.password?.stringValue},</h1>,
        <h1>username : {users?.username?.stringValue}</h1>
      </div> */}
      <UserAccount />
    </React.Fragment>
  );
}

export default App;
