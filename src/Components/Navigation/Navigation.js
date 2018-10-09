import React from "react";
import { NavLink } from 'react-router-dom'; 

import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="inactive" activeClassName="active">Photography</NavLink>
      <NavLink to="/mathart" className="inactive" activeClassName="active">Math Art</NavLink>
      <NavLink to="/resume" className="inactive" activeClassName="active">Resume</NavLink>
      <NavLink to="/aboutme" className="inactive" activeClassName="active">About Me</NavLink> 
    </div>
  );
};

export default Navigation;