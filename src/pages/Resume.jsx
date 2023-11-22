
import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


const Resume = () => {
  return (
    <div>
      <Navigation />
      <h2 class="page-titles">Résumé</h2>

      <p className="text">
        You can download my résumé{" "}
        <a href="/images/Anthony_Resume.pdf" download>
          here
        </a>
        .
      </p>

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
