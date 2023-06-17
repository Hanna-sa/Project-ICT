import React, { useState } from "react";
import "./Login.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsChecked) {
      console.log("Please agree to the terms and conditions.");
      return;
    }

    // Perform sign-up logic here
    console.log("Sign-up form submitted");
    console.log("Name:", name);
    console.log("Place:", place);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("Education:", education);
    console.log("Phone Number:", phoneNumber);
    console.log("Terms Checked:", termsChecked);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Sign Up Here</h2>
          <input
            className="login-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="login-input"
            type="text"
            placeholder="Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            className="login-input"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            className="login-input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="text"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <input
            className="login-input"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="signup-checkbox-container">
            <input
              className="signup-checkbox"
              type="checkbox"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
            />
            <label className="signup-checkbox-label">
              <span>Make sure you read the instructions</span>
              <span className="signup-asterisk">*</span>
            </label>
          </div>
          <button className="login-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
