import React from "react";
import GithubLogo from "../../images/github-logo.png";
import LinkedInLogo from "../../images/linkedin-logo.png";

const Footer = () => {
  return (
    <div class="links">
      <a
        href="https://github.com/anthonyciccone90"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="GitHubLogo" src={GithubLogo} alt="GitHub Logo" />
      </a>

      <a
        href="https://www.linkedin.com/in/anthony-ciccone-9a0495178"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="LinkedInLogo"
          className="emojis"
          src={LinkedInLogo}
          alt="Linkedin Logo"
        />
      </a>

      <a href="tel:+19048609241" className="emoji-link">
        <span className="emojis">📱</span>
      </a>
      <a href="mailto:cicconeworldwide@gmail.com" className="emoji-link">
        <span className="emojis">📨</span>
      </a>
      <p id="copyright">&copy; 2023</p>
    </div>
  );
};

export default Footer;
