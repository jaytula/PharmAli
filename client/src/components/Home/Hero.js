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
        <p className="hero-paragraph">PharmAli takes great pride and joy to welcome all people to be informed about what medication they put into their bodies. We provide a worldwide community for those who are curious about their own medical history, their friends or even families needs. You are never alone and you wont ever feel that way with PharmAli by your side. </p>
      </div>
    </div>
  )
}

export default Hero;
