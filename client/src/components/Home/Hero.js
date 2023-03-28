import React from "react";
import "../../styles/hero.css";
const Hero = ({imageSrc}) => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img src={imageSrc} alt="Travel" className="hero-image"/>
      </div>

      <div className="hero-subtitle">
        <h1 className="hero-title"> BETTER DRUG CHOICES & CONFIDENCE STARTS HERE.</h1>
        <p className="hero-paragraph">PharmAli provides accurate and independent information on more than 25,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment.</p>
      </div>
    </div>
  )
}

export default Hero;
