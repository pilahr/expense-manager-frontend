import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../../components/LoginForm/LoginForm";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const getUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(!errorMessage);
      });
  };

  const hideError = () => {
    setErrorMessage(!errorMessage);
  };

  return (
    <div className="logIn-page">
      <div>
        <Heading title="£SPENT" />
      </div>
      <div>
        <LoginForm
          email={email}
          password={password}
          emailInput={setEmail}
          passwordInput={setPassword}
          hideError={hideError}
          getUser={getUser}
        />
        {errorMessage && (
          <div className="login-popUp-msg">
            <h1 className="login-popUp-msg__text">
              Please Enter a valid email and password!
            </h1>
            <Button
              buttonText="Try again"
              onClick={hideError}
              func="tryAgain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
