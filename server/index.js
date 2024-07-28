require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected http://localhost:5000"))
  .catch((err) => console.error(err));

// Routes
const userRoutes = require("./routes/user.js");

app.use("/api/users", userRoutes);
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
