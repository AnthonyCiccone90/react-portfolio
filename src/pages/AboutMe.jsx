// AboutMe.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>Short bio about the developer. Make sure to include a photo!</p>

      <p>
        <Link to="/">Return to homepage</Link>
      </p>
      <Footer />
    </div>
  );
};

export default AboutMe;
