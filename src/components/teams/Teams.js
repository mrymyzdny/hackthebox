import React from "react";
import "./Teams.css";
import { SlArrowRight } from "react-icons/sl";

export default function Teams() {
  return (
    <div className="teams">
      {/*  Logos (clients) */}
      <div className="teams-logos">
        <div className="row">
          <div className="col-5 col-xl-2">
            <img src="./images/home-easports-logo.svg" alt="logo"></img>
          </div>
          <div className="col-5 col-xl-2">
            <img src="./images/home-intel-logo.svg" alt="logo"></img>
          </div>
          <div className="col-5 col-xl-2">
            <img src="./images/home-akerva-logo.svg" alt="logo"></img>
          </div>
          <div className="col-5 col-xl-2">
            <img src="./images/home-deloitte-logo.svg" alt="logo"></img>
          </div>
          <div className="col-5 col-xl-2">
            <img src="./images/home-synack-logo.svg" alt="logo"></img>
          </div>
          <div className="col-5 col-xl-2">
            <img src="./images/home-boozallen.svg" alt="logo"></img>
          </div>
        </div>
      </div>

      {/*  Logos Caption */}
      <p className="teams-caption">
        Trusted by the world’s most ambitious cybersecurity teams.
      </p>

      {/*  Teams Text */}

      <div className="teams__report">
        <img
          className="teams__banner"
          src="/images/forrester-book.png"
          alt="banner"
        ></img>
        <div className="teams__info">
          <p className="teams__text">
            <span>Hack The Box is a Leader in The Forrester Wave™ : </span>
            Cybersecurity Skills and Training Platforms, Q4 2023
          </p>
          <a className="teams-link" href="#0">
            Read the report
            <SlArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>

      {/* Logos (reviews) */}
      <div className="teams__reviews">
        <div>
          <img src="./images/g2-top-software.svg" alt="logo"></img>
        </div>
        <div>
        <img src="./images/trustscore.svg" alt="logo"></img>
        </div>
      </div>
    </div>
  );
}
