import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src="" alt="" />
            <label>name</label>
            <input type="text" name="name" placeholder="name" />
          </div>
        )}

        <div className="input">
          <img src="" alt="" />
          <label>email</label>
          <input type="email" name="email" placeholder="email id" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <label>password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost password!<span>Click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
