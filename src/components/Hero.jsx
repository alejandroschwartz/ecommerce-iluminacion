import React from "react";

import "../styles/components/Hero.scss";
import hero from '../styles/images/hero-image.png';

function Hero() {
  return (
    <div className="Home__hero">
      <div className="Home__hero--text">
        <h1>
          Cálculo de <br /> iluminación
        </h1>
      </div>

      <img className="Home__hero--image" src={hero} alt="" />

      <div className="wave3">
        <svg
          className="wave__svg3"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            className="wave__path3"
            d="M-0.27,-0.48 C319.69,178.13 197.23,176.14 500.27,-1.47 L500.00,150.00 L0.00,150.00 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
