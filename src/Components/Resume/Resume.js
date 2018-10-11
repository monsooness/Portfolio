import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import * as d3 from 'd3'

import './Resume.css'

class Resume extends Component {

  render() {

    return (
      <div>
        <div className="intro">
         Timeline
        </div>
        <div className="container">
        <p>Resume</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Resume);