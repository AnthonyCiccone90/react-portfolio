import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Ecommerce from '../../images/ecommerce.jpeg';
import Employees from '../../images/employees.png';
import Logo from '../../images/logo.jpeg';
import Quiz from '../../images/quiz.webp';
import Readme from '../../images/readme.png';
import MTG from '../../images/knockoff-gatherer2.0.png';

const Portfolio = () => {
  return (
    <div className="container">
      <h2>Highlighted Projects</h2>
      <p>These are six of my highlighted projects. All images are clickable links that will bring you to the GitHub Repository to view the code.</p>

      <div className="row">
        {/* First Column */}
              <div className="col-md-6">
                  <p class="titles">Knockoff Gatherer</p>
          <a href="https://github.com/JacobCampa/Knockoff-Gatherer-2.0" target="_blank" rel="noopener noreferrer">
            <img className="thumbnails" src={MTG} alt="Knockoff Gatherer2.0 repo" />
          </a>
          <p class="titles">Ecommerce backend</p>
          <a href="https://github.com/AnthonyCiccone90/ecommerce-backend" target="_blank" rel="noopener noreferrer">
            <img className="thumbnails" src={Ecommerce} alt="Ecommerce repo" />
          </a>
          <p class="titles">Employee Content Management System</p>
          <a href="https://github.com/AnthonyCiccone90/employee_cms" target="_blank" rel="noopener noreferrer">
            <img className="thumbnails" src={Employees} alt="Employees CMS repo" />
          </a>
          <p class="titles">Logo Creator</p>
        </div>

        {/* Second Column */}
        <div className="col-md-6">
          <a href="https://github.com/AnthonyCiccone90/logo-maker" target="_blank" rel="noopener noreferrer">
            <img className="thumbnails" src={Logo} alt="Logo generator repo" />
          </a>
          <p class="titles">Coding Quiz</p>
          <a href="https://github.com/AnthonyCiccone90/coding-quiz" target="_blank" rel="noopener noreferrer">
            <img className="thumbnails" src={Quiz} alt="Quiz Repo" />
          </a>
          <p class="titles">README Generator</p>
          <a href="https://github.com/AnthonyCiccone90/coding-quiz" target="_blank" rel="noopener noreferrer">
            <img className="thumbnails" src={Readme} alt="Readme repo" />
                  </a>
        </div>
      </div>

      <p>
        <Link to="/">Return to homepage</Link>
      </p>
      <Footer />
    </div>
  );
};

export default Portfolio;
