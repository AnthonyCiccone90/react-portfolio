import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Ecommerce from "../../images/ecommerce.jpeg";
import Employees from "../../images/employees.png";
import Logo from "../../images/logo.jpeg";
import Quiz from "../../images/quiz.webp";
import Readme from "../../images/readme.png";
import MTG from "../../images/knockoff-gatherer2.0.png";
import Navigation from "../components/Navigation";

const Project = ({ title, repoLink, deployedLink, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-md-6" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <p className="titles">{title}</p>
      <div>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <img className="thumbnails" src={image} alt={`${title} repo`} />
        </a>
        {isHovered && (
          <div className="links">
            <p>
              <a href={repoLink} class="link-text" target="_blank" rel="noopener noreferrer">
                Repo
              </a>{" "}
              |{" "}
              <a href={deployedLink} class="link-text" target="_blank" rel="noopener noreferrer">
                Deployed
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="container">
      <Navigation />
      <h2 class="page-titles">Highlighted Projects</h2>
      <p class="text">These are six of my highlighted projects. All images are clickable links that will bring you to the GitHub Repository to view the code.</p>

      <div className="row">
        <Project title="Knockoff Gatherer" class="titles" repoLink="https://github.com/JacobCampa/Knockoff-Gatherer-2.0" deployedLink="https://mtg-search-engine-9599f588e5fc.herokuapp.com/" image={MTG} />
        <Project title="Ecommerce backend" class="titles" repoLink="https://github.com/AnthonyCiccone90/ecommerce-backend" deployedLink="https://drive.google.com/file/d/1j2Bn5AuWcuArkWzT23UhcYBFUxkJYiks/view" image={Ecommerce} />
        <Project title="Employee Content Management System" class="titles" repoLink="https://github.com/AnthonyCiccone90/employee_cms" deployedLink="https://drive.google.com/file/d/1bngbfbpQRfUur0G4UknP8OFGjoCUSU8L/view" image={Employees} />
        <Project title="Logo Creator" class="titles" repoLink="https://github.com/AnthonyCiccone90/logo-maker" deployedLink="https://drive.google.com/file/d/1nCZox-ecSC5MM4k2qze31N6Dkkg0QujG/view" image={Logo} />
        <Project title="Coding Quiz" class="titles" repoLink="https://github.com/AnthonyCiccone90/coding-quiz" deployedLink="https://anthonyciccone90.github.io/coding-quiz/" image={Quiz} />
        <Project title="README Generator" class="titles" repoLink="https://github.com/AnthonyCiccone90/coding-quiz" deployedLink="https://anthonyciccone90.github.io/coding-quiz/" image={Readme} />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
