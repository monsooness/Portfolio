import React, { Component } from 'react';

import { graphql } from "gatsby";

import India from './India'
import Myanmar from './Myanmar'
import Nepal from './Nepal'
import Bhutan from './Bhutan'
import Peru from './Peru'

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

