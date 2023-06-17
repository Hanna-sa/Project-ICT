import React, { useState } from "react";
import "./Profile.css";
import Navbar from "../components/Navbar";


const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [place, setPlace] = useState("New York");
  const [age, setAge] = useState(25);
  const [education, setEducation] = useState("Bachelor's Degree");
  const [contactDetails, setContactDetails] = useState("123-456-7890");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleContactDetailsChange = (e) => {
    setContactDetails(e.target.value);
  };

  return (
    
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <Navbar />  
      <div className="profile-content">
        <div className="profile-field">
          <div className="profile-label">Name:</div>
          <div className="profile-value">
            {isEditing ? (
              <input
                className="profile-input"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Place:</div>
          <div className="profile-value">
            {isEditing ? (
              <input
                className="profile-input"
                type="text"
                value={place}
                onChange={handlePlaceChange}
              />
            ) : (
              <span>{place}</span>
            )}
          </div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Age:</div>
          <div className="profile-value">
            {isEditing ? (
              <input
                className="profile-input"
                type="number"
                value={age}
                onChange={handleAgeChange}
              />
            ) : (
              <span>{age}</span>
            )}
          </div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Email:</div>
          <div className="profile-value">
            <span>user@example.com</span>
          </div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Education:</div>
          <div className="profile-value">
            {isEditing ? (
              <input
                className="profile-input"
                type="text"
                value={education}
                onChange={handleEducationChange}
              />
            ) : (
              <span>{education}</span>
            )}
          </div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Contact:</div>
          <div className="profile-value">
            {isEditing ? (
              <input
                className="profile-input"
                type="text"
                value={contactDetails}
                onChange={handleContactDetailsChange}
              />
            ) : (
              <span>{contactDetails}</span>
            )}
          </div>
        </div>
      </div>
      {isEditing ? (
        <div className="profile-actions">
          <button className="profile-button profile-save" onClick={handleSaveClick}>
            Save
          </button>
          <button className="profile-button profile-cancel" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="profile-actions">
          <button className="profile-button profile-edit" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
