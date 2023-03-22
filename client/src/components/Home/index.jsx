import React from "react";
import "../../styles/home.css";
import banner from "../../assets/images/banner.jpeg"
import pillfalling from "../../assets/images/pill-falling.jpeg"
import medicine from "../../assets/images/home-background.jpeg"
import Hero from './Hero';
import Slider from './Slider';

const Home = () => {
  return (
    <div className="App-2">
      <Hero imageSrc={banner}/>
      <Slider 
      imageSrc={pillfalling} 
      title={"This is all about Pharmali"} 
      subtitle={"Pharmali is a page where you can freely educate "}
      />
      <Slider 
      imageSrc={medicine} 
      title={"This is what makes us different"} 
      subtitle={"Pharmali stands out from othe pages"}
      flipped={true}
      />
        <Slider 
      imageSrc={pillfalling} 
      title={"This is talking about Search component"} 
      subtitle={"why we made search component "}
      />
      <Slider 
      imageSrc={medicine} 
      title={"This is talking about Pharmacy Locator component"} 
      subtitle={"why we made locator component"}
      flipped={true}
      />
         <Slider 
      imageSrc={pillfalling} 
      title={"This is talking about Blogs component"} 
      subtitle={"why we made blogs component "}
      />
      <Slider 
      imageSrc={medicine} 
      title={"This is talking about Journal component"} 
      subtitle={"why we made Journal component"}
      flipped={true}
      />
         <Slider 
      imageSrc={pillfalling} 
      title={"This is talking about our story and why we created this app "} 
      subtitle={"who we made this app for "}
      />
      <Slider 
      imageSrc={medicine} 
      title={"This is our contact section"} 
      subtitle={"conclusion and then footer of page"}
      flipped={true}
      />
    </div>
  )
}

export default Home;
