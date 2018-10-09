import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import India from './India/India.js'
import Myanmar from './Myanmar/Myanmar.js'
import Nepal from './Nepal/Nepal.js'
import Bhutan from './Bhutan/Bhutan.js'
import Peru from './Peru/Peru.js'
import Thailand from './Thailand/Thailand.js'

import './Photography.css'

class Photography extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="photoContainer">
        <India />
        <Nepal />
        <Peru />
        <Bhutan />
        <Myanmar />
        <Thailand />
      </div>
    )
  }
}

export default withRouter(Photography);