import React from "react";
import "./About.css";

export default function About() {
  // Start Typewritter JS Codes
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  // End Typewritter JS Codes

  return (
    <div className="about">
      <div className="about__title">Why Hack The Box?</div>
      <div className="about__description">
        Upskilling cyber superhumans since 2017.
      </div>
      <div className="about__feature-carts">
        <div className="feature-cart">
          <img
            className="feature-cart__img"
            src="./images/why-1.svg"
            alt="img"
          ></img>
          <p className="feature-cart__title">Top-quality content</p>
          <p className="feature-cart__text">Created by hackers for hackers</p>
        </div>
        <div className="feature-cart">
          <img
            className="feature-cart__img"
            src="./images/why-2.svg"
            alt="img"
          ></img>
          <p className="feature-cart__title">Engaging & gamified</p>
          <p className="feature-cart__text">Learn by doing, learn by playing</p>
        </div>
        <div className="feature-cart">
          <img
            className="feature-cart__img"
            src="./images/why-3.svg"
            alt="img"
          ></img>
          <p className="feature-cart__title">Hacking community</p>
          <p className="feature-cart__text">
            Anyone can learn, from zero to hero
          </p>
        </div>
      </div>

      {/* Typewriter */}
      <div className="typewriter-section">
        <h1>
          <a
            href="#0"
            class="typewrite"
            data-period="2000"
            data-type='[ "2.4m members", "2.4m hackers", "2.4m learners"]'
          >
            <span class="wrap"></span>
          </a>
        </h1>
        <p className="typewriter-text">
          Be part of the <a href="#0">HTB Community</a>. Get involved.
        </p>
      </div>
    </div>
  );
}
