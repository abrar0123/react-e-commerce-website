import React, { useEffect, useState } from "react";
import "./user.css";
import Userdetails from "./Userdetails";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfige";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { firestoreActions } from "../../Redux/FirestoreDB/firestoredb";
import { getFirestoreUsers } from "../../Redux/FirestoreDB/firebaseApi";
import Button from "../../components/common/UI/button/Button";

export default function User() {
  
  const [users, setusers] = useState([]);
  const dbusers = useSelector((state) => state.firestore.users);
  const dbloading = useSelector((state) => state.firestore.loading);
  const dberr = useSelector((state) => state.firestore.error);

  const [username, setusername] = useState("");

  const [password, setpassword] = useState("");
  const [index, setindex] = useState("");

  console.log("users22_", dbusers, dbloading, dberr);

  const mycollection = collection(db, "users");

  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getFirestoreUsers());
  }, [Dispatch]);

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

  const recordedited = (rec) => {
    setusername(rec.uname);
    setpassword(rec.pass);
    setindex(rec.index);
  };

  const updateUser = async () => {
    try {
      const userDoc = doc(db, "users", index);
      const newField = { username: username, password: password };
      const data = await updateDoc(userDoc, newField);
      console.log("update__", data);
    } catch (error) {
      console.log("error__", error);
    }
  };

  console.log("users__", users);

  return (
    <div className="user">
      <div className="userItem">
        <h2> Welcome to Admin Panel </h2>
        <div className="flex">
          <div className="inputContainer">
            <input
              type="text"
              value={username}
              placeholder="Enter username "
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              value={password}
              placeholder="Enter password "
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <Button onClick={updateUser}>update</Button>
        </div>
      </div>

      <Userdetails
        users={dbusers}
        dbloading={dbloading}
        recordedited={recordedited}
      />
    </div>
  );
}
