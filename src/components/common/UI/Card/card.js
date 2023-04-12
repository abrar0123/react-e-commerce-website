import React from "react";

export default function card(props) {
  return (
    <div
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
