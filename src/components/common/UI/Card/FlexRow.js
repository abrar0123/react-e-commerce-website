import React from "react";
import styles from "./maincard.module.css";

export default function FlexRow(props) {
  return (
    <div
      style={props.style}
      className={`${styles.flexRowContainer}  ${props.className}`}
    >
      {props.children}
    </div>
  );
}
