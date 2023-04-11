import React from "react";
import styles from "./maincard.module.css";

export default function FlexColumn(props) {
  return (
    <div
      style={props.style}
      className={`${styles.flexcolumnContainer}  ${props.className}`}
    >
      {props.children}
    </div>
  );
}
