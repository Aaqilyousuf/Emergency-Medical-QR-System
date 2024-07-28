import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css"; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">My details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
