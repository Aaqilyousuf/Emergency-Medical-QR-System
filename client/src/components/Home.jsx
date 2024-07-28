// src/components/Home.js
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import "./Home.css"; // Import the CSS file

const Home = ({ onUserSubmit }) => {
  const [medicalInfo, setMedicalInfo] = useState({
    name: "",
    dob: "",
    bloodType: "",
    allergies: "",
    medications: "",
    medicalConditions: "",
    emergencyContacts: "",
  });

  const [qrData, setQrData] = useState("");

  // Load QR code data from localStorage when the component mounts
  useEffect(() => {
    const savedQrData = localStorage.getItem("qrData");
    if (savedQrData) {
      setQrData(savedQrData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicalInfo({ ...medicalInfo, [name]: value });
  };

  const generateQrCode = () => {
    const data = JSON.stringify(medicalInfo);
    setQrData(data);
    localStorage.setItem("qrData", data); // Store QR code data in localStorage
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onUserSubmit(medicalInfo); // Call the function to pass user data
    setMedicalInfo({
      // Clear the form after submission
      name: "",
      dob: "",
      bloodType: "",
      allergies: "",
      medications: "",
      medicalConditions: "",
      emergencyContacts: "",
    });
    generateQrCode(); // Optionally generate the QR code after submission
  };

  const deleteQrCode = () => {
    setQrData(""); // Clear the QR code data
    localStorage.removeItem("qrData"); // Remove QR code data from localStorage
  };

  return (
    <div className="container">
      <h1>Welcome to the Emergency Medical Info QR Code System</h1>
      <h2>Enter Medical Info</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={medicalInfo.name}
          onChange={handleChange}
          required // Mark as required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={medicalInfo.dob}
          onChange={handleChange}
          required // Mark as required
        />
        <input
          type="text"
          name="bloodType"
          placeholder="Blood Type"
          value={medicalInfo.bloodType}
          onChange={handleChange}
          required // Mark as required
        />
        <input
          type="text"
          name="allergies"
          placeholder="Allergies"
          value={medicalInfo.allergies}
          onChange={handleChange}
        />
        <input
          type="text"
          name="medications"
          placeholder="Medications"
          value={medicalInfo.medications}
          onChange={handleChange}
        />
        <input
          type="text"
          name="medicalConditions"
          placeholder="Medical Conditions"
          value={medicalInfo.medicalConditions}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emergencyContacts"
          placeholder="Emergency Contacts"
          value={medicalInfo.emergencyContacts}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={generateQrCode}>
          Generate QR Code
        </button>
      </form>

      {qrData && (
        <div className="qr-code-container">
          <h2>Generated QR Code:</h2>
          <QRCode value={qrData} />
          <button onClick={deleteQrCode}>Delete QR Code</button>
        </div>
      )}
    </div>
  );
};

export default Home;
