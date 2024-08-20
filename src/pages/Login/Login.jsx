import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Register");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Register" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
        />
        <input type="password" placeholder="password" className="form-input" />
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
