import React, { Component } from 'react';

import India from './Photography/India'
import Myanmar from './Photography/Myanmar'
import Nepal from './Photography/Nepal'
import Bhutan from './Photography/Bhutan'
import Peru from './Photography/Peru'

import './App.css';


class App extends Component {
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
      </div>
    );
  }
}

export default App;

