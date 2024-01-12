
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Ecommerce from "../../images/ecommerce.jpeg";
import Employees from "../../images/Employees.png";
import Logo from "../../images/logo.jpeg";
import Quiz from "../../images/quiz.webp";
import Readme from "../../images/readme.png";
import MTG from "../../images/Lore-Keeper's-Library.png";
import Navigation from "../components/Navigation";
import Badge from "../../images/bootcamp-badge.png";

const Project = ({ title, repoLink, deployedLink, image, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="col-md-6">
      <div
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className="card-front">
          <p className="titles">{title}</p>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <img className="thumbnails" src={image} alt={`${title} repo`} />
          </a>
        </div>
        <div className="card-back">
          <div className="cardlinks">
            <p id="link-text">
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>{" "}
              |{" "}
              <a
                href={deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </p>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};


const Portfolio = () => {
  return (
    <div className="container">
      <Navigation />
      <h2 class="page-titles">Highlighted Projects</h2>

      <div className="row" id="cardrows">

        <div id="mtgcard">
          <Project            
            title="Lore Keeper's Library: A Magic the Gathering Card Search"
            class="titles"
            repoLink="https://github.com/mhannah3161/Magic-The-Gathering-Search"
            deployedLink="https://the-lorekeepers-library.onrender.com/"
            image={MTG}
            description="A full stack application for the card game Magic: The Gathering"/>
        </div>

        <div id="ecommercecard">
          <Project
            title="Ecommerce Backend"
            class="titles"
            repoLink="https://github.com/AnthonyCiccone90/ecommerce-backend"
            deployedLink="https://drive.google.com/file/d/1j2Bn5AuWcuArkWzT23UhcYBFUxkJYiks/view"
            image={Ecommerce}
            description="Using Exrpess.js and Sequalize in order for it to interact with a MySQL database"/>
        </div>

        <div id="employeecmscard">
          <Project
            title="Employee Content Management System"
            class="titles"
            repoLink="https://github.com/AnthonyCiccone90/employee_cms"
            deployedLink="https://drive.google.com/file/d/1bngbfbpQRfUur0G4UknP8OFGjoCUSU8L/view"
            image={Employees}
            description="A content management system used to organize employees by role, department, salary and manager"/>
        </div>

        <div id="logocard">
          <Project
            title="Logo Creator"
            class="titles"
            repoLink="https://github.com/AnthonyCiccone90/logo-maker"
            deployedLink="https://drive.google.com/file/d/1nCZox-ecSC5MM4k2qze31N6Dkkg0QujG/view"
            image={Logo}
            description="Using Node.js and testing for the rendering of shapes and characters"/>
        </div>

        <div id="quizcard">
          <Project
            title="Coding Quiz"
            class="titles"
            repoLink="https://github.com/AnthonyCiccone90/coding-quiz"
            deployedLink="https://anthonyciccone90.github.io/coding-quiz/"
            image={Quiz}
            description="Using JavaScript functions to create a game with saved scores "/>
        </div>

        <div id="readmecard">
          <Project
            title="README Generator"
            class="titles"
            repoLink="https://github.com/AnthonyCiccone90/readme-generator"
            deployedLink="https://drive.google.com/file/d/13W0lgJb2JfcCaVjySVCtcWwejxmnwTtC/view"
            image={Readme}
            description="Using JavaScript to create a professionally formatted README"/>
        </div>
        <a
        href="https://www.credly.com/badges/e3108544-812f-4e59-bbee-bfc6ee835a08"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Badge} alt="bootcamp badge" id="badge" />
      </a>

      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
