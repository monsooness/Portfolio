import React, { Component } from 'react';

import './App.css';
import PhotoGrid from './Photogrid';

//parent

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: this.props.data
    }
  }

  render() {
    console.log(this.state.photos)
    return (
      <div className="photoContainer">
          {/* {this.state.photos.forEach( (country) => 
            <PhotoGrid />
          )} */}
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
