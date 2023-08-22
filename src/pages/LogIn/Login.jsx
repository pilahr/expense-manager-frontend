import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/auth";
import firebaseConfig from "../../firebase.js";

const Login = ({ setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  firebase.initializeApp(firebaseConfig);

  const getUser = async () => {
    firebase
      .auth()
      .setPersistence("local")
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            navigate("/home");
          });
      })

      .catch((error) => {
        console.log(error);
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
