import React from "react";
import styles from "./Button.module.css";
const PrimaryButton = (props) => {
  return (
    <button
      className={` ${props.className} ${styles.primarybuttonstyle}`}
      type={props.type || "submit"}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
