import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-container">
      <div className="navbar">
        <NavLink to="/" className="nav-logo">
          <h1 id="navbar">NextLynx.Ai</h1>
        </NavLink>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>

      <nav className={`nav-links change ${isOpen ? "active" : ""}`}>
        <ul className="lists">
          <li className="links">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="links">
              Home
            </NavLink>
          </li>
          <li className="links">
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="links"
            >
              About
            </NavLink>
          </li>
          <li className="links">
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="links"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
