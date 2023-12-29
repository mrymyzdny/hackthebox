import React from "react";
import "./Navbar.css";
import { SlArrowDown } from "react-icons/sl";

export default function Navbar() {
  const [menuOpen, setManuOpen] = React.useState(false);
  //  Mobile Menu Function
  const openMenu = () => {
    if (menuOpen) {
      setManuOpen(false);
    } else {
      setManuOpen(true);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="https://www.hackthebox.com">
          <img src="/images/logo-htb.svg" alt="logo" />
        </a>
      </div>

      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#0">
            Business
          </a>
        </li>
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#0">
            Hackers
          </a>
        </li>
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#0">
            Industries
          </a>
        </li>
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#0">
            Resources
          </a>
        </li>
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#0">
            Company
          </a>
        </li>
      </ul>

      {/* Mobile navbar*/}

      {menuOpen && (
        <ul className="mobile-nav">
          <li className="mobile-nav__list-item">
            <a className="mobile-nav__list-link" href="#0">
              Business
            </a>
          </li>
          <li className="mobile-nav__list-item">
            <a className="mobile-nav__list-link" href="#0">
              Hackers
            </a>
          </li>
          <li className="mobile-nav__list-item">
            <a className="mobile-nav__list-link" href="#0">
              Industries
            </a>
            <SlArrowDown className="arrow-icon" />
          </li>
          <li className="mobile-nav__list-item">
            <a className="mobile-nav__list-link" href="#0">
              Resources
            </a>
            <SlArrowDown className="arrow-icon" />
          </li>
          <li className="mobile-nav__list-item">
            <a className="mobile-nav__list-link" href="#0">
              Company
            </a>
            <SlArrowDown className="arrow-icon" />
          </li>
          <li className="mobile-nav__list-item">
            <a className="mobile-nav__list-link" href="#0">
              Sign In
            </a>
            <SlArrowDown className="arrow-icon" />
          </li>
          <li className="mobile-nav__list-item">
            <a className="mobile-nav__list-link" href="#0">
              Get Started
            </a>
            <SlArrowDown className="arrow-icon" />
          </li>
        </ul>
      )}

      {/* Desktop Buttons */}
      <div className="navbar__desktop-btns">
        <a className="signin-link" href="#0">
          Sign In
        </a>
        <a className="getstarted-link" href="#0">
          Get Started
        </a>
      </div>

      {/* Mobile Icon */}
      <div
        onClick={openMenu}
        className={`${
          menuOpen
            ? "navbar__toggle-icon navbar__toggle-icon--open"
            : "navbar__toggle-icon"
        }`}
      >
        <div className="navbar__toggle-line"></div>
      </div>
    </div>
  );
}
