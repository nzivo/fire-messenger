import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { login, signup } from "../../config/firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Register");

  // State variables for auth
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentState === "Register") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Register" ? (
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="username"
            className="form-input"
            required
          />
        ) : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email Address"
          className="form-input"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
          className="form-input"
        />
        <button type="submit">
          {currentState === "Register" ? "Sign Up" : "Sign In"}
        </button>
        <div className="login-term">
          <input type="checkbox" className="" id="" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {currentState === "Register" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login Here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Don&apos;t have an Account?{" "}
              <span onClick={() => setCurrentState("Register")}>
                Register Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
