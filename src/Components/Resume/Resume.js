import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

// import './Aboutme.css'

class Resume extends Component {

  render() {
    return (
      <div className="container">
        <form method="get" action="file.doc">
          <button type="submit">Download Resume</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Resume);