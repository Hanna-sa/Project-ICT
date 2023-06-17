import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2> <br />
          <br />
          <input
            className="login-input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">
            Login
          </button>
           <p className="login-signup">
            Don't have an account? <a href="/s">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
