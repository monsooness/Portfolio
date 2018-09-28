import React, { Component } from 'react';
import museumTop from './Photos/museumTop.jpg'
import './App.css';

class India extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    function importAll(r) {
      return r.keys().map(r);
    }
    const images = importAll(require.context('./Photos/India', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className="photoGrid">
       <img src={bridges.jpg} />
       
      </div>
    );
  }
}

export default India;