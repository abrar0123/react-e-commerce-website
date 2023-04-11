import React from "react";
import styles from "./Button.module.css";
export default function button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.buttonstyle} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
