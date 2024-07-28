import React, { useState } from "react";
import axios from "axios";

const MedicalInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    bloodType: "",
    allergies: "",
    medications: "",
    medicalConditions: "",
    emergencyContacts: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API
      const res = await axios.post("http://localhost:5000/api/users", formData);
      console.log("User data saved:", res.data);
      // Reset the form or show success message
      setFormData({
        name: "",
        dob: "",
        bloodType: "",
        allergies: "",
        medications: "",
        medicalConditions: "",
        emergencyContacts: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Medical Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Blood Type:</label>
        <input
          type="text"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Allergies:</label>
        <input
          type="text"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Medications:</label>
        <input
          type="text"
          name="medications"
          value={formData.medications}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Medical Conditions:</label>
        <input
          type="text"
          name="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Emergency Contacts (comma-separated):</label>
        <input
          type="text"
          name="emergencyContacts"
          value={formData.emergencyContacts}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalInfoForm;
