import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          NOTES
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Hello
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notes" className="nav-links">
              Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar" className="nav-links">
              Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links">
              Sign in
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
