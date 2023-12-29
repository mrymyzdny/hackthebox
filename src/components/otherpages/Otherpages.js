import React from "react";
import "./Otherpages.css";
import { SlArrowRight } from "react-icons/sl";

export default function Otherpages() {
  return (
    <div>
      <div className="other-pages">
        <a className="other-page__wrapper box-1" href="#0">
          <p className="other-page__title">For Business</p>
          <p className="other-page__text">980+ teams upskilled</p>
          <span>
            Get a Demo 
            <SlArrowRight className="arrow-icon" />
          </span>
        </a>
        <a className="other-page__wrapper box-2" href="#0">
          <p className="other-page__title">For Hackers</p>
          <p className="other-page__text">2.4m+ hackers trained</p>
          <span>
            Join for Free 
            <SlArrowRight className="arrow-icon" />
          </span>
        </a>
        <a className="other-page__wrapper box-3" href="#0">
          <p className="other-page__title">For Academia</p>
          <p className="other-page__text">995+ universities enrolled</p>
          <span>
            Enroll for Free 
            <SlArrowRight className="arrow-icon" />
          </span>
        </a>
      </div>
    </div>
  );
}
