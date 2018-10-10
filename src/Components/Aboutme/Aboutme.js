import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import './Aboutme.css'

class Aboutme extends Component {

  render() {
    return (
      <div className="container">
       <p>About me</p>
      </div>
    )
  }
}

export default withRouter(Aboutme);