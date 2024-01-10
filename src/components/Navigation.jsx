// Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav>
      <ul id="nav-items">
        <li><NavLink to="/" activeClassName="active">Portfolio</NavLink></li>
        <li><NavLink exact to="/aboutme" activeClassName="active">About Me</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;