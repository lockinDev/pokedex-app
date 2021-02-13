import React from "react";

export const Overlay = () => {
  const componentWillUnmount = () => {
    document.body.classList.remove("has-overlay");
  };

  document.body.classList.add("has-overlay");

  return ReactDOM.createPortal(
    <div
      onClick={this.props.onClick}
      className={`overlay ${this.props.hidden ? "hidden" : ""}`}
    ></div>,
    document.body
  );
};
