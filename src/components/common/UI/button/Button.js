import React from "react";

export default function button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
