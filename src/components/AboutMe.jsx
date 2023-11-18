import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation"; // Import Navigation

const AboutMe = () => {
  return (
    <div>
      <Navigation /> {/* Include Navigation here */}
      <h2>Anthony Ciccone </h2>
      <p>Hello! My name is Anthony and I am a new web developer.</p>



      <Footer />
    </div>
  );
};

export default AboutMe;
