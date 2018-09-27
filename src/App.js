import React, { Component } from 'react';
import PhotoGrid from './Photogrid';
import './App.css';

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
          {this.state.photos.map( (country, index) => 
            <PhotoGrid photos={this.state.photos.country} key={country.name +' '+ index}/>
          )}
      </div>
    );
  }
}

export default App;
