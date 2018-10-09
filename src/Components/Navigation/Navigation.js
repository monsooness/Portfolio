import React from "react";
import { NavLink } from 'react-router-dom'; 

import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Photographyy</NavLink>
      {/* <NavLink to="/mathart">Math Art</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/aboutme">About Me</NavLink> */}
    </div>
  );
};

export default Navigation;