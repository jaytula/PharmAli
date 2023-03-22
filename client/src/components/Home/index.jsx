import React from "react";
import "../../styles/home.css";
import family from "../../assets/images/family.png";
import pharmaliLogo from "../../assets/images/pharmaliLogo.png";
import search from "../../assets/images/search.png";
import medicine from "../../assets/images/medicine.png";
import locator from "../../assets/images/locator.png";
import blogs from "../../assets/images/blogs.png";
import journal from "../../assets/images/journal.png";
import medlist from "../../assets/images/medlist.png";
import contact from "../../assets/images/contact.png";

import Hero from './Hero';
import Slider from './Slider';
import Navbar2 from "./Navbar2";


const Home = () => {
  return (
    <div className="App-2">
      <Navbar2 />
      <Hero imageSrc={pharmaliLogo} />
      <div className="slider_container_two">
        <Slider
          hrefvalue={"/"}
          imageSrc={family}
          title={" ABOUT US "}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
        />
      </div>
      <div className="slider_container_one">
        <Slider
          hrefvalue={"/"}
          imageSrc={medicine}
          title={"DRUG LIST A-Z"}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
          flipped={true}
        />
      </div>
      <div className="slider_container_two">
        <Slider
          hrefvalue={"/search"}
          imageSrc={search}
          title={"DRUG SEARCH"}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
        />
      </div>
      <div className="slider_container_one">
        <Slider
          hrefvalue={"/pharma"}
          imageSrc={locator}
          title={"PHARMACY LOCATOR"}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
          flipped={true}
        />
      </div>
      <div className="slider_container_two">
        <Slider
          hrefvalue={"/blogs"}
          imageSrc={blogs}
          title={"BLOGS / MY BLOGS"}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
        />
      </div>
      <div className="slider_container_one">
        <Slider
          hrefvalue={"/myjournal"}
          imageSrc={journal}
          title={"MY JOURNAL"}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
          flipped={true}
        />
      </div>
      <div className="slider_container_two">
        <Slider
          hrefvalue={"/mydrugs"}
          imageSrc={medlist} 
          title={"MY MED LIST "}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
        />
      </div>
      <div className="slider_container_one">
        <Slider
          imageSrc={contact}
          title={"CONTACT US"}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
          flipped={true}
        />
      </div>
    </div>
  );
};

export default Home;
