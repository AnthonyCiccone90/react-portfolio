// Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav>
      <ul id="nav-items">
        <li><NavLink exact to="/" activeClassName="active">About me</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;