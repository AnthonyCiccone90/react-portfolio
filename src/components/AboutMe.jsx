import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import profilePic from "../../images/profile-pic.jpeg";

const AboutMe = () => {
  return (
    <div>
      <Navigation />
      <h2 class="page-titles">Anthony Ciccone </h2>
      <img src={profilePic} alt="profile picture" id="profile-pic"></img>
      <p class="text" id="p-1">
      Greetings! I'm Anthony, a passionate full-stack web developer. Embracing a continuous learning journey has been the guiding principle of my life. Exploring the world of coding has not only expanded my skill set but has also provided me with a fresh perspective on how our interconnected world functions. The sheer joy of problem-solving through coding, irrespective of its scale, brings an unparalleled sense of satisfaction, fueling my desire to delve deeper and absorb more knowledge. The surge of serotonin that accompanies overcoming challenges is a unique experience, unlike anything I've encountered before.{" "}
      </p>
      <p class="text">Beyond the realm of coding, my expertise extends into various domains. I've navigated diverse career paths, ranging from hospitality (bartender and mixologist) to music and music education (recording/touring artist and teacher), and even finance (mortgage loan officer). This list merely scratches the surface of my multifaceted journey. I'd be delighted to share more about my experiences with you. If you're curious or have any inquiries, please don't hesitate to reach out, and I'll respond promptly. Thank you for stopping by!</p>
      <Footer />
    </div>
  );
};

export default AboutMe;
