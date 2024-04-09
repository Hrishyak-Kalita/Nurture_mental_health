import React, { useState } from "react";
import "./Navbar.scss";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <header>
        <Link to="/">
          <Logo />
        </Link>

        <nav className="nav-links">
          <ul className="max-width-links">
            <li>
              <Link to="/" className="menu-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="menu-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/joinus" className="menu-link">
                Join Us
              </Link>
            </li>
            {/* <li>
              <Link to="/contact" className="menu-link">
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>
        <button className="navbar-button" onClick={() => setVisible(!visible)}>
          <IoMenu /> Menu
        </button>
      </header>

      {visible && (
        <div className="show-nav-links" onClick={() => setVisible(false)}>
          <div className="div-links">
            <ul className="min-width-links">
              <li>
                <Link to="/" className="menu-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="menu-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="menu-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/joinus" className="menu-link">
                  Join Us
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="menu-link">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
