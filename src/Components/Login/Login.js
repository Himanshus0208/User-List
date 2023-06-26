import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validity, setValidity] = useState(true);
  //const [login, setLogin] = useState(false);

  const submitHandler = (event) => {
    console.log("-----");
    event.preventDefault();

    if (username === "admin" && password === "admin") {
      //console.log("inside if");

      
      setValidity(true);
      window.location.href = "/home";
      console.log("inside if");
    } else {
      //window.location.href = "/";
      setValidity(false);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form className="login-form" >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {validity ? (
            ""
          ) : (
            <p className="error-msg">
              Wrong Credentials!! <br />
              Please enter correct details.
            </p>
          )}
          <Link to="./home">
            <button id="button-login" type="submit" onClick={submitHandler}>
              Login
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
