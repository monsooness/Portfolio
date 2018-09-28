import React, { Component } from 'react';
import './App.css';
import museumTop from './Photos/museumTop.jpg'

class Photogrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photosInfo: null
    }
  }

  render() {
    console.log(this.props.photos)

    return (
      <div className="photoGrid">
        {this.props.photos.map( (elem) => {
          return(
            <div>
            <img src={museumTop} />
            </div>
          )
          }
        )}
      </div>
    );
  }
}

export default Photogrid;