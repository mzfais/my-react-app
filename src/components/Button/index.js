import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";

function MyButton({ btnClassName, btnText }) {
  return <Button className={btnClassName}>{btnText}</Button>;
}

export default MyButton;
