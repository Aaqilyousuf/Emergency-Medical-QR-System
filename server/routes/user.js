const express = require("express");
const router = express.Router();
const User = require("../model/User.js");
const QRCode = require("qrcode");

// Create a new user and generate QR code
router.post("/", async (req, res) => {
  const {
    name,
    dob,
    bloodType,
    allergies,
    medications,
    medicalConditions,
    emergencyContacts,
  } = req.body;

  try {
    const qrCode = await QRCode.toDataURL(
      `${name}, ${dob}, ${bloodType}, ${allergies}, ${medications}, ${medicalConditions}, ${emergencyContacts}`
    );
    const newUser = new User({
      name,
      dob,
      bloodType,
      allergies,
      medications,
      medicalConditions,
      emergencyContacts: emergencyContacts.split(","),
      qrCode,
    });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", async (req, res) => {
  res.send("hello");
});

module.exports = router;
