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
      <p>Front-End Proficiencies:
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
      </p>
      <p>Back-End Proficiencies:
      <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>APIs</li>
          <li>Testing</li>
        </ul>
      </p>

      <Footer />
    </div>
  );
};

export default Resume;
