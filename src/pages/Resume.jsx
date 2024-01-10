import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ResumeFile from "../../images/resume.pdf";
import Badge from "../../images/bootcamp-badge.png";

const Resume = () => {
  return (
    <div>
      <Navigation />
      <h2 class="page-titles">Resume</h2>
      <p className="text">
        You can view my resume{" "}
        <a href={ResumeFile} target="_blank" rel="noopener noreferrer">
          here
        </a>
        {""}.
      </p>

      {/* <a
        href="https://www.credly.com/badges/e3108544-812f-4e59-bbee-bfc6ee835a08"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Badge} alt="bootcamp badge" id="badge" />
      </a> */}

      <p class="text">
        Front-End Proficiencies:
        <ul class="proficiencies">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
      </p>
      <p class="text">
        Back-End Proficiencies:
        <ul class="proficiencies">
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
