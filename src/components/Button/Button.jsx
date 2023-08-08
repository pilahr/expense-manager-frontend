import React from "react";
import "./Button.scss";

const Button = ({ buttonText, onClick, func }) => {
  let buttonStyle = "form-button";

  switch (func) {
    case "login":
      buttonStyle += " login";
      break;
    case "add":
      buttonStyle += " add";
      break;
    default:
      buttonStyle = "";
      break;
  }

  return (
    <div>
      <button className={buttonStyle} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
