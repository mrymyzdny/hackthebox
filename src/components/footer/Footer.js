import React from "react";
import "./Footer.css";
// REACR ICONS
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        {/* Footer First Column */}
        <div className="footer__first-col col-sm-6 col-md-3">
          <a href="#0" className="footer__logo">
            <img src="./images/logo-htb-white.svg" alt="logo"></img>
          </a>
          <div className="footer__main-links">
            <a href="#0">HACKER</a>
            <a href="#0">BUSINESS</a>
            <a href="#0">UNIVERSITY</a>
          </div>
          <div className="footer__logos">
            <a href="www.linkedin.com">
              <FaLinkedinIn />
            </a>
            <a href="www.twitterx.com">
              <BsTwitterX />
            </a>
            <a href="www.tiktok.com">
              <FaTiktok />
            </a>
            <a href="www.instagram.com">
              <FaInstagram />
            </a>
            <a href="www.facebook.com">
              <FaFacebookF />
            </a>
            <a href="www.youtube.com">
              <FaYoutube />
            </a>
            <a href="www.discord.com">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Footer List Items (1) */}
        <div className="footer__list-items col-sm-6 col-md-3">
          <span className="footer__title">Company</span>
          <a href="#0">About Us</a>
          <a href="#0">Join Us</a>
          <a href="#0">Contact Us</a>
          <a href="#0">Swag</a>
          <a href="#0">Gift Cards</a>
          <a href="#0">News</a>
          <a href="#0">Newsletter</a>
          <a href="#0">Events</a>
          <a href="#0">Partners</a>
          <a href="#0">Legal & Compliance</a>
        </div>

        {/* Footer List Item (2) */}
        <div className="footer__list-items col-sm-6 col-md-3">
          <span className="footer__title">Resources</span>
          <a href="#0">Knowledge Base</a>
          <a href="#0">Blog</a>
          <a href="#0">Forum</a>
          <a href="#0">Community</a>
          <a href="#0">Meetups</a> <a href="#0">Testimonials</a>
          <a href="#0">Certificate Validation</a>
          <a href="#0">Players</a>
          <a href="#0">Teams</a>
        </div>
      </div>

        {/* Footer Second Row */}
        <div className="footer__second-row">
          <div className="row">
            <span>© 2023 Hack The Box</span>
            <a href="#0">Legal & Compliance</a>
            <a href="#0">Acceptable Use Policy</a>
            <a href="#0">Website T&Cs</a>
            <a href="#0">Privacy Notice</a>
            <a href="#0">Cookie Settings</a>
          </div>
        </div>
      <div className="row"></div>
    </div>
  );
}
