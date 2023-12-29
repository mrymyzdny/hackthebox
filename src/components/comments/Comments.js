import React, { useState } from "react";
import "./Comments.css";
import { commentsData } from "./commentData.js";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

export default function Comments({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Slider Functions
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="comments">
      {/* Comments Header */}
      
      <div className="comments__header">
        <p className="comments__title">
          Loved by hackers. <br /> Trusted by enterprises.
        </p>

        <div className="comments__btns">
          <button className="comments__left-btn" onClick={prevSlide}>
            <SlArrowLeft />
          </button>
          <button className="comments__rigth-btn" onClick={nextSlide}>
            <SlArrowRight />
          </button>
        </div>
      </div>

      {/* Comments Body */}
      <div className="comments__body">
        {commentsData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div>
                  <p className="comment__text">{slide.text}</p>
                  <img
                    src={slide.img}
                    className="comment__logo"
                    alt="logo"
                  ></img>
                  <p className="comment__info">{slide.info}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
