import React from "react";
import "./Header.css";
import { SlArrowRight } from "react-icons/sl";

export default function Header() {
  return (
    <div className="header">
      <div className="header-link__wrapper">
        <span className="header-link__span">NEW</span>
        <div className="header-link">
          <p className="header-link__text">
            HTB for Blue Teams | an all-in-one solution for defensive upskilling
          </p>
          <SlArrowRight className="arrow-icon" />
        </div>
      </div>

      <p className="header__title">
        The #1 cybersecurity<br></br>upskilling platform.
      </p>

      <p className="header__caption">
        Hack The Box gives individuals, businesses and universities the tools
        they need to continuously improve their cybersecurity capabilities
        <span>— all in one place.</span>
      </p>

      {/* Header Carts */}
      <div className="header-carts">
        <div className="first-row-wrapper">
          <div className="header-cart">
            <img
              className="header-cart__bg"
              src="./images/cart-bg.png"
              alt="bg"
            ></img>
            <div className="header-cart__info">
              <p className="header-cart__title">For Business</p>
              <p className="header-cart__caption">
                One solution for developing cybersecurity skills across your entire IT team
              </p>
              <a href="#0" className="header-cart__link">
                Get a Demo 
                <SlArrowRight className="arrow-icon" />
              </a>
            </div>
          </div>

          <div className="header-cart">
            <img
              className="header-cart__bg"
              src="./images/cart-bg.png"
              alt="bg"
            ></img>
            <div className="header-cart__info">
              <p className="header-cart__title">For Hackers</p>
              <p className="header-cart__caption">
                A unified suite of hacking experiences - from beginners to seasoned professionals
              </p>
              <a href="#0" className="header-cart__link">
                Join for Free 
                <SlArrowRight className="arrow-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="second-row-wrapper">
          <div className="second-row-header-cart">
            <img
              className="second-header-cart__bg"
              src="./images/cart-bg.png"
              alt="bg"
            ></img>
            <div className="second-header-cart__info">
              <p className="second-row-header-cart__title">For Universities</p>
              <p className="second-row-header-cart__caption">
                A huge library of educational content to help your students put theory into practice
              </p>
              <a href="#0" className="second-row-header-cart__link">
                Enroll for Free
                <SlArrowRight className="arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
