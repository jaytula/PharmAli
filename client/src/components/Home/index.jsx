import React from "react";
import "../../styles/home.css";
import family from "../../assets/images/family.png";
import logo from "../../assets/images/logo.png";
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
      <Hero imageSrc={logo} />
      <div className="slider_container_two">
        <Slider
          hrefvalue={"/"}
          imageSrc={family}
          title={" ABOUT US "}
          subtitle={"Pharmali provides accurate and independent information on more than 25,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable with the medical terms and information regarding each drug! Pharmali provides a safe space for you to unwind all your thoughts about your recent prescription or if you just want to clear your head and just journal. We have over 200,000 people subscribed and educated about all the latest medical terms through phenomenal articles and blogs posted by different users and people around the world. These blogs are a place to unite and build a community with others who are facing similar circumstances and experiences. "}
        />
      </div>
      <div className="slider_container_one">
      <Slider
          hrefvalue={"/search"}
          imageSrc={search}
          title={"DRUG SEARCH"}
          subtitle={"Pharmali has an amazing drug search page that provides you with a list of all medications you can think of ranging from A - Z .  If your doctor prescribes you a medication and you want to be educated or more informed about it Pharmali is the best place to be!  We choose to let you decide how much information you want at a time so you dont feel overwhelmed or feeled burned out with all the information youre retaining while taking it on your own. You are never alone in this process and will always have a community of loving, caring and kind people who will share tips and tricks about life hacks you might need. Having an oppurtunity where you can see the drug description, drug interaction,dosage and administration,adverse reaction, contraindications, information for patients and overdosage. "}
          flipped={true}
       />
      </div>
      <div className="slider_container_two">
      <Slider
          hrefvalue={"/pharma"}
          imageSrc={locator}
          title={"PHARMACY LOCATOR"}
          subtitle={"When your doctor provides you with a medical prescription and you now need to visit a Shoppers drug mart or the nearest pharmacy, Pharmali has a pharmacy locator that shows you the nearest shoppers drug mart pharmacy location. A pharmacy locator is a tool or service that helps individuals find the nearest pharmacy to their current location. It is particularly useful for people who need to fill a prescription or purchase over-the-counter medications but are not familiar with the area they are in. Many pharmacy locators are available online or as mobile applications and allow users to search for pharmacies based on their zip code, city, or state. Some pharmacy locators also provide additional information about the pharmacies, such as their hours of operation, phone number, and directions. This makes it easy for people to quickly find the pharmacy they need and get the medications they require."}
        
        />
      </div>
      <div className="slider_container_one">
      <Slider
          hrefvalue={"/blogs"}
          imageSrc={blogs}
          title={"BLOGS"}
          subtitle={"Blogs and articles are two types of written content that are commonly found on the internet and also on our webpage. A blog is typically a personal or informal website where individuals can express their thoughts, opinions, and experiences on a variety of topics, we cater to mostly medical blogs. Blogs often feature a conversational tone and may include multimedia content such as images, videos, and infographics. On the other hand, an article is a more formal and structured piece of writing that aims to inform or educate readers about a particular subject. Articles may be found on news websites, magazines, or other online publications and are usually written by professional journalists, subject matter experts, or writers with a specific area of expertise. Both blogs and articles are valuable sources of information and can be used to stay informed, gain insights, or simply entertain and engage readers. There are people all around the. world sharing their story."}
          flipped={true}
       />
      </div>
      <div className="slider_container_two">
      <Slider
          hrefvalue={"/myjournal"}
          imageSrc={journal}
          title={"MY JOURNAL"}
          subtitle={"Writing a journal is a powerful tool for self-reflection and personal growth. It is a form of writing that allows individuals to record their thoughts, feelings, and experiences on a regular basis. Journaling can help individuals clarify their thoughts and emotions, identify patterns or triggers in their behavior, and gain insight into their own strengths and weaknesses. It can also be a source of stress relief and a way to cope with difficult emotions. Journaling can take many forms, from free-writing to bullet-point lists or structured prompts. Regardless of the format, the act of writing in a journal can be cathartic and transformative. By reflecting on one's experiences, one can gain a deeper understanding of oneself and the world around them, leading to greater self-awareness and personal growth. PharmAli provides that space to just unwind and let loose of all your thoughts. It a safe space where no one will judge you."}
    
        />
      </div>
      <div className="slider_container_one">
      <Slider
          hrefvalue={"/mydrugs"}
          imageSrc={medlist} 
          title={"MY MED LIST "}
          subtitle={"Having a medication list is an essential aspect of managing one's health and ensuring proper medical care. A medication list is a record of all the medications an individual is taking, including prescription drugs, over-the-counter medications, and supplements. It is important to keep an accurate and up-to-date medication list as it can help healthcare providers make informed decisions about an individual's treatment plan. A medication list can also help prevent potential drug interactions, which can cause adverse side effects or reduce the effectiveness of a medication. In case of an emergency, having a medication list readily available can help first responders provide appropriate medical treatment quickly. It is important to review and update a medication list regularly with one's healthcare provider to ensure it remains accurate and relevant. Overall, having a medication list is a simple yet critical way to ensure proper medical care and promote optimal health."}
          flipped={true}
       />
      </div>
      {/* <div className="slider_container_two">
        <Slider
          hrefvalue={"/mydrugs"}
          imageSrc={medlist} 
          title={"MY MED LIST "}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
        />
      </div> */}
      {/* <div className="slider_container_one">
        <Slider
          imageSrc={contact}
          title={"CONTACT US"}
          subtitle={"Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug!Pharmali provides accurate and independent information on more than 24,000 prescription drugs and substitutes over-the-counter medicines. This material is provided for educational purposes only and is not intended for medical advice, diagnosis, or treatment. We aim to better aid you in the knowledge of your health concerns and all medications that you put into your body. We strive to make you feel more comfortable in the medical terms and information regarding each drug! "}
          flipped={true}
        />
      </div> */}

    </div>
  );
};

export default Home;
