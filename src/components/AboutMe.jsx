import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation"; // Import Navigation

const AboutMe = () => {
  return (
    <div>
      <Navigation /> {/* Include Navigation here */}
      <h2>Anthony Ciccone </h2>
      <p>Hello! My name is Anthony and I am a full stack web developer. Constantly learning new skills has been the mantra of my life. Learning to code has given me a new prespective on how our world operates. Solving problems with coding, no matter how big or small, gives such a high sense of satisfaction that makes me want to keep going and learn more.  </p>



      <Footer />
    </div>
  );
};

export default AboutMe;
