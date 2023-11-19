import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import profilePic from "../../images/profile-pic.jpeg";

const AboutMe = () => {
  return (
    <div>
      <Navigation />
      <h2>Anthony Ciccone </h2>
      <img src={profilePic} alt="profile picture" id="profile-pic"></img>
      <p>
        Hello! My name is Anthony and I am a full stack web developer.
        Constantly learning new skills has been the mantra of my life. Learning
        to code has given me a new prespective on how our world operates.
        Solving problems with coding, no matter how big or small, gives such a
        high sense of satisfaction that makes me want to keep going and learn
        more. The seratonin rush I get when solving problems is unlike anything
        I've felt in the past.{" "}
      </p>
      My skills and knowledge base go far beyond the coding environment. I have
      had several other careers and hobbies that had given me a rich diversity
      of knowledge. Some of these other fields include hospitality (bartender
      and mixologist), music and music education (recording/touring artist and
      teacher) and finance (mortgage loan officer). This is not an exhaustive
      list of the things I have done. I would love the opprotunity to tell you
      more about myself. If you are interested or have any questions at all for
      me please reach out. Thanks for visiting!
      <Footer />
    </div>
  );
};

export default AboutMe;
