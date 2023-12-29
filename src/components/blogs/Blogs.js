import React from "react";
import "./Blogs.css";
import { SlArrowRight } from "react-icons/sl";

export default function Blogs() {
  return (
    <div className="blogs">

      {/* Blogs Header */}
      <div className="blogs__header">
        <p className="blogs__title">Latest from our blog</p>
        <a className="blogs__link" href="#0">
          Read customer stories
          <SlArrowRight className="arrow-icon"/>
        </a>
      </div>
      
      {/* Blogs Body */}
      <div className="blogs__body">
        <a className="blog-banner" href="#0">
          <img className="blog-banner__img" src="./images/blog-1.jpeg" alt="img"></img>
          <div>
          <span className="blog-banner__subject">HACKER</span>
          <p className="blog-banner__caption">CVE-2022-0492 (Carpediem) explained </p>
          </div>
        </a>
        <a className="blog-banner" href="#0">
          <img className="blog-banner__img" src="./images/blog-2.jpeg" alt="img"></img>
          <div>
          <span className="blog-banner__subject">BUSINESS</span>
          <p className="blog-banner__caption">Honoring Steve Katz: timeless lessons for today’s CISOs </p>
          </div>
        </a>
        <a className="blog-banner" href="#0">
          <img className="blog-banner__img" src="./images/blog-3.jpeg" alt="img"></img>
          <div>
          <span className="blog-banner__subject">HACKER</span>
          <p className="blog-banner__caption">You’ve made it through the rift! Season 4 is all about survival. </p>
          </div>
        </a>
      </div>
    </div>
  );
}
