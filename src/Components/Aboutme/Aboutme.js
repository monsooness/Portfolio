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
          <h1>Hello</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Aboutme);