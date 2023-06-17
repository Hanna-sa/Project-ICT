import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Admin Login button clicked");
    console.log("Enter admin password:", password);
  };

  return (
    <div className="container">
      <div className="box">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="title">Admin Login</h2> <br />
          <br />
          <input
            className="input"
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
           Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;