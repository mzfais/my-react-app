import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";

function MyButton({ options }) {
  return <Button className={options.className}>{options.text}</Button>;
}

export default MyButton;
