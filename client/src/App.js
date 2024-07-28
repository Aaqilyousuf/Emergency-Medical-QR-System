// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import MedicalInfoForm from "./components/MedicalInfoForm"; // Import the medical info form
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const handleUserSubmit = (newUser) => {
    setUserDetails((prevDetails) => [...prevDetails, newUser]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar here */}
        <Routes>
          <Route path="/" element={<Home onUserSubmit={handleUserSubmit} />} />
          <Route path="/user" element={<User userDetails={userDetails} />} />
          <Route path="/medical-info" element={<MedicalInfoForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
