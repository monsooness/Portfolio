import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import PhotoGrid from './Photogrid';

//parent

class App extends Component {
  render() {
    return (
      <div className="photoContainer">
        <PhotoGrid />
        <PhotoGrid />
        <PhotoGrid />
        <PhotoGrid />
        <PhotoGrid />
        <PhotoGrid />
      </div>
    );
  }
}

export default App;
