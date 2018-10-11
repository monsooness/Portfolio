import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import './Aboutme.css'

class Aboutme extends Component {

  render() {
    return (
      <div>
        <div className="intro">

        </div>
        <div className="container">
        <p>About me</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Aboutme);