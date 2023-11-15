// Resume.jsx
import React from "react";
import LinkedInLogo from "../../images/linkedin-logo.png";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div>
      <h2 id="resume">
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
      <p><Link to="/">Return to homepage</Link></p>
      <Footer />
    </div>
  );
};

export default Resume;
