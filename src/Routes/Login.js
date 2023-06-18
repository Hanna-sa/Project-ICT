import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      // Assuming login is successful
      console.log("Login successful");
      console.log("User data:", response.data);

      // Navigate to the home page
      // window.location = "/home";
    } catch (error) {
      // Handle error
      console.log("Login failed");
      console.error(error.response.data);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
          <br />
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
          {error && <p className="login-error">{error}</p>}
          <p className="login-signup">
            Don't have an account? <Link to="/s">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
