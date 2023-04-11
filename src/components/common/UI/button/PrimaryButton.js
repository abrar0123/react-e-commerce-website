import React from "react";
import styles from "./Button.module.css";
const PrimaryButton = (props) => {
  return (
    <button
      className={` ${props.custombtnStyle} ${styles.buttonstyle}`}
      type={props.type || "submit"}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
