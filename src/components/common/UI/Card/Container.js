import React from "react";

export default function Container(props) {
  return (
    <div style={props.style} className={props.className}>
      {props.children}
    </div>
  );
}
