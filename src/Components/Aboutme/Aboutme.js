import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import headshot from './Photos/cropped-headshot.JPG'


import './Aboutme.css'

class Aboutme extends Component {

  render() {
    return (
      <div>
        <div className="intro">
          Creating > Consuming
        </div>

        <div className="about-container">
        <img src={headshot} alt="headshot"/>  
            <h2>MERN stack developer </h2>
            <p> I strike for modularity on the front end </p>
            <p> And scalability on the back end </p>
            <p> Eager to learn and build full-stack projects </p>
            <p> With newer technologies and larger datasets</p>
            <br></br>
            <p>You can contact me at:</p>
            <p>nepzsoon@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Aboutme);