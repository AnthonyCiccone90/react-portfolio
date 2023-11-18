// Resume.jsx
import React from "react";
import LinkedInLogo from "../../images/linkedin-logo.png";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";

const Resume = () => {
  return (
    <div>
      <Navigation /> 
      <h2 class="page-title">
        Resume coming soon. Please view my LinkedIn page to see my work
        experience prior to joining the tech industry
      </h2>

      <a
        href="https://www.linkedin.com/in/anthony-ciccone-9a0495178"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="LinkedInLogo" src={LinkedInLogo} alt="LinkedIn Logo" />
      </a>
      <Footer />
    </div>
  );
};

export default Resume;
