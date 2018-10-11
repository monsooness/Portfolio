import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import headshot from './Photos/headshot.JPG'


import './Aboutme.css'

class Aboutme extends Component {

  render() {
    return (
      <div>
        <div className="intro">
          Creating > Consuming
        </div>
        <div className="about-container">
          <div className="item">
          <img src={headshot} alt="Head Shot of me"/>
          <h1>Hello</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Aboutme);