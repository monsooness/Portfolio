import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import './Mathart.css'

class Mathart extends Component {

  render() {
    return (
      <div className="container">
       <p>Math Art</p>
      </div>
    )
  }
}

export default withRouter(Mathart);