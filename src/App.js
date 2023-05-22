import React, { useEffect } from "react";
import UserAccount from "./pages/UserAccount/userAccount";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./Redux/shopapiSlice";
function App() {
  const Dispatch = useDispatch();



  return (
    <React.Fragment>
      <UserAccount />
    </React.Fragment>
  );
}

export default App;
