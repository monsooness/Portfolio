import React from "react";
import { NavLink } from 'react-router-dom'; 

import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="left">
        <NavLink exact to="/" className="inactive" activeClassName="active">Photography</NavLink>
        <NavLink to="/mathart" className="inactive" activeClassName="active">Math Art</NavLink>
      </div>

      <div className="right">
        <NavLink to="/resume" className="inactive" activeClassName="active">Resume</NavLink>
        <NavLink to="/aboutme" className="inactive" activeClassName="active">About Me</NavLink> 
      </div>
    </div>
  );
};

export default Navigation;