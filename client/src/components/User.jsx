// src/components/User.js
import React from "react";
import "./User.css";

const User = ({ userDetails }) => {
  return (
    <div className="user-info">
      <h1>User Information</h1>
      {userDetails.length === 0 ? (
        <p>No user information available.</p>
      ) : (
        <ul>
          {userDetails.map((user, index) => (
            <li key={index}>
              <div className="user-detail">
                <strong>Name:</strong> <span>{user.name}</span>
              </div>
              <div className="user-detail">
                <strong>DOB:</strong> <span>{user.dob}</span>
              </div>
              <div className="user-detail">
                <strong>Blood Type:</strong> <span>{user.bloodType}</span>
              </div>
              <div className="user-detail">
                <strong>Allergies:</strong> <span>{user.allergies}</span>
              </div>
              <div className="user-detail">
                <strong>Medications:</strong> <span>{user.medications}</span>
              </div>
              <div className="user-detail">
                <strong>Conditions:</strong>{" "}
                <span>{user.medicalConditions}</span>
              </div>
              <div className="user-detail">
                <strong>Emergency Contacts:</strong>{" "}
                <span>{user.emergencyContacts}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
