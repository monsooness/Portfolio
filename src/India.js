import React, { Component } from 'react';
import Img from "gatsby-image"

import './App.css';

class India extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const items = [...Array(100)].map((val, i) => `Item ${i}`);
    return (
      <div className="photoGrid">
       India
       <ul>
        {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
      </ul>
      </div>
    );
  }
}

export default India;