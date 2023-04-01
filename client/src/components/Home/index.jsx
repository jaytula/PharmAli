import React from "react";
import family from "../../assets/images/family.png";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import locator from "../../assets/images/locator.png";
import blogs from "../../assets/images/blogs.png";
import journal from "../../assets/images/journal.png";
import medlist from "../../assets/images/medlist.png";
import Hero from './Hero';
import Slider from './Slider';
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="App-2">
      <Hero imageSrc={logo} />
      <div className="slider_container_two">
        <Slider
          hrefvalue={"/"}
          imageSrc={family}
          title={" ABOUT US "}
          subtitle={"PharmAli takes great pride and joy to welcome all people to be informed about what medication they put into their bodies. We provide a worldwide community for those who are curious about their own medical history, their friends or even families needs. You are never alone & wont ever feel that way with PharmAli by your side. "}
        />
      </div>
      <div className="slider_container_one">
      <Slider
          hrefvalue={"/search"}
          imageSrc={search}
          title={"DRUG SEARCH"}
          subtitle={"PharmAli has an amazing drug search page that provides you with a list of all medications you can think of ranging from A - Z .  If your doctor prescribes you a medication and you want to be educated or more informed about it PharmAli is the best place to be!   "}
          flipped={true}
       />
      </div>
      <div className="slider_container_two">
      <Slider
          hrefvalue={"/pharma"}
          imageSrc={locator}
          title={"PHARMACY LOCATOR"}
          subtitle={"When your doctor provides you with a medical prescription and you now need to visit a Shoppers drug mart or the nearest pharmacy, PharmAli has a pharmacy locator that shows you the nearest shoppers drug mart pharmacy location. "}
        
        />
      </div>
      <div className="slider_container_one">
      <Slider
          hrefvalue={"/blogs"}
          imageSrc={blogs}
          title={"BLOGS"}
          subtitle={"Blogs and articles are two types of written content that are commonly found on the internet and also on our webpage. A blog is typically a personal or informal website where individuals can express their thoughts, opinions, and experiences on a variety of topics, we cater to mostly medical blogs. "}
          flipped={true}
       />
      </div>
      <div className="slider_container_two">
      <Slider
          hrefvalue={"/myjournal"}
          imageSrc={journal}
          title={"MY JOURNAL"}
          subtitle={"Writing a journal is a powerful tool for self-reflection and personal growth. It is a form of writing that allows individuals to record their thoughts, feelings, and experiences on a regular basis. Journaling can help individuals clarify their thoughts and emotions."}
    
        />
      </div>
      <div className="slider_container_one">
      <Slider
          hrefvalue={"/mydrugs"}
          imageSrc={medlist} 
          title={"MY MED LIST "}
          subtitle={"Having a medication list is an essential aspect of managing one's health and ensuring proper medical care. A medication list is a record of all the medications an individual is taking, including prescription drugs, over-the-counter medications, and supplements."}
          flipped={true}
       />
      </div>
    </div>
  );
};

export default Home;
