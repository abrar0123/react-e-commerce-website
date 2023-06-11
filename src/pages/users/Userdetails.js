import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebaseConfige";
import Button from "../../components/common/UI/button/Button";
import { useDispatch } from "react-redux";
import { deleteFirestoreUser } from "../../Redux/FirestoreDB/firebaseApi";

export default function Userdetails({ users, recordedited,dbloading }) {
  const Dispatch = useDispatch();

  const updateHandler = async (index, uname, pass) => {
    const rec = { uname, pass, index };
    recordedited(rec);
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
                  updateHandler(item.id, item.username, item.password);
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
