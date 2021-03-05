import React from "react";
import reactDom from "react-dom";
import "./overlay.css"

export const Overlay = (props) => {
  const componentWillUnmount = () => {
    document.body.classList.remove("has-overlay");
  };

  document.body.classList.add("has-overlay");

  return reactDom.createPortal(
    <div
      onClick={props.onClick}
      className={`overlay ${props.hidden ? "hidden" : ""}`}
    ></div>,
    document.body
  );
};
