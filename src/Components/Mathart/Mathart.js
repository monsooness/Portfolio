import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

// import './Aboutme.css'

class Mathart extends Component {

  render() {
    return (
      <div className="photoContainer">
       <p>Math Art</p>
      </div>
    )
  }
}

export default withRouter(Mathart);