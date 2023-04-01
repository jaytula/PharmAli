import React from "react";
import "../../styles/slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, hrefvalue, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  // To render content in flipped direction w.r.t image and text
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img href={hrefvalue} src={imageSrc} alt="Travel" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">
              <a href={hrefvalue} >{title}</a></h1>
            <p className="slider__subtitle">{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">
              <a href={hrefvalue}>{title}</a>
            </h1>
            <p className="slider__subtitle">{subtitle}</p>
          </div>
          <img href={hrefvalue} src={imageSrc} alt="Travel" className="slider__image" />

        </>
      );
    }

  };
  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;