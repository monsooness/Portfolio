import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

// import './Aboutme.css'

class Resume extends Component {

  render() {
    return (
      <div className="photoContainer">
       <p>Resume</p>
      </div>
    )
  }
}

export default withRouter(Resume);