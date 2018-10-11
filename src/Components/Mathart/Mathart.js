import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import image1 from './Images/math-art-1.JPG'

import './Mathart.css'

class Mathart extends Component {

  render() {
    return (
      <div>
        <div className="intro">
          Circles
        </div>
       
        <div classNam="art-container">

          <div className="art">
            <div className="image"><img src={image1}/></div>
            <div className="image">art2</div>
            <div className="image">art3</div>
            <div className="image">art4</div>
          </div>

          <div className="art">
            <div className="image">art1</div>
            <div className="image">art2</div>
            <div className="image">art3</div>
            <div className="image">art4</div>
          </div>

          <div className="art">
            <div className="image">art1</div>
            <div className="image">art2</div>
            <div className="image">art3</div>
            <div className="image">art4</div>
          </div>
    
        </div>
      </div>
    )
  }
}

export default withRouter(Mathart);