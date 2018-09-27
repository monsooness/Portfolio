import React, { Component } from 'react';
import './App.css';

class Photogrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photosInfo: null
    }
  }

  componentWillReceiveProps(props) {
    console.log(props)
  }

  render() {
    console.log(this.props, this.key)
    return (
      <div className="photoGrid">
        children
      </div>
    );
  }
}

export default Photogrid;