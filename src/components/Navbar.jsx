import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //function to remove button on mobile based on screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div>
            <Link to="/" className="navbar-logo">
              ILC
            </Link>
          </div>

          {/* Nav Menu  */}
          <div>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/class"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Class
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/calendar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/weather"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Weather
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sel" className="nav-links" onClick={closeMobileMenu}>
                  SEL
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/lofi"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Lofi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sounds"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sounds
                </Link>
              </li>
            </ul>
          </div>

          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
