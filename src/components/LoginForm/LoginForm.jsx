import React from "react";
import "./LoginForm.scss";
import { useState } from "react";
import Button from "../Button/Button";

const LoginForm = ({ email, password, emailInput, passwordInput, getUser }) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);

  const handleSetEmail = (event) => {
    emailInput(event.target.value);
    if (!event.target.value.includes("@" && ".")) {
      setEmailErrorMessage(true);
    } else {
      setEmailErrorMessage(false);
    }
  };

  const handleSetPassword = (event) => {
    passwordInput(event.target.value);
  };

  return (
    <div className="login-form">
      <div>
        <h2 className="login-form__heading">Log in</h2>
      </div>

      <input
        className="login-form__input"
        placeholder="Your Email Address"
        type="text"
        onInput={handleSetEmail}
        value={email}
      />

      <div>
        {emailErrorMessage && (
          <p className="login-form__error-msg">Your email must be valid...</p>
        )}
      </div>
      <input
        className="login-form__input"
        placeholder="Your Password"
        type="password"
        onInput={handleSetPassword}
        value={password}
      />
      <div>
        <Button buttonText="Log In" onClick={getUser} func="login"/>
      </div>
    </div>
  );
};

export default LoginForm;
