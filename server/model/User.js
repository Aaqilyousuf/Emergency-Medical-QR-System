const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  bloodType: { type: String, required: true },
  allergies: { type: String },
  medications: { type: String },
  medicalConditions: { type: String },
  emergencyContacts: { type: [String] }, // Array of strings for emergency contacts
  qrCode: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
