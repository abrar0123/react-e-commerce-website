import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebaseConfige";
import Button from "../../components/common/UI/button/Button";
import { useDispatch } from "react-redux";
import {
  deleteFirestoreUser,
  firestoreActions,
} from "../../Redux/FirestoreDB/firestoredb";

export default function Userdetails({ users }) {
  const Dispatch = useDispatch();

  const updateHandler = async (index) => {
    try {
      const userDoc = doc(db, "users", index);
      const newField = { password: "tttt4444" };
      const data = await updateDoc(userDoc, newField);
      console.log("update__", data);
    } catch (error) {
      console.log("error__", error);
    }
  };

  const deleteHandler = (index) => {
    Dispatch(deleteFirestoreUser(index));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Unique ID</th>

          <th>Email</th>

          <th>Password</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.username}</td>
              <Button
                style={{ backgroundColor: "green", margin: "5px" }}
                onClick={() => {
                  updateHandler(item.id);
                }}
              >
                Edit
              </Button>
              <Button
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  deleteHandler(item.id);
                }}
              >
                delete
              </Button>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
