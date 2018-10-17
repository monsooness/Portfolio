import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import image1 from './Images/math-art-1.JPG';
import image2 from './Images/math-art-2.JPG';
import image3 from './Images/math-art-3.JPG';
import image4 from './Images/math-art-4.JPG';
import image5 from './Images/math-art-5.JPG';
import image6 from './Images/math-art-6.JPG';
import image7 from './Images/math-art-7.JPG';
import image8 from './Images/math-art-8.JPG';
import image9 from './Images/math-art-9.JPG';
import image10 from './Images/math-art-10.JPG';
import image11 from './Images/math-art-11.JPG';
import image12 from './Images/math-art-12.JPG';

import './Mathart.css'

class Mathart extends Component {

  render() {
    return (
      <div>
        <div className="intro">
          Circles
        </div>
       
        <div classNam="art-container">

          <div className="art" >
            <div className="image"><img src={image1} alt="Circular graph"/></div>
            <div className="image"><img src={image2} alt="Circular graph"/></div>
            <div className="image"><img src={image3} alt="Circular graph"/></div>
           
          </div>

          <div className="art">
            <div className="image"><img src={image4} alt="Circular graph"/></div>
            <div className="image"><img src={image5} alt="Circular graph"/></div>
            <div className="image"><img src={image6} alt="Circular graph"/></div>
          </div>

          <div className="art">
            <div className="image"><img src={image10} alt="Circular graph"/></div>
            <div className="image"><img src={image7} alt="Circular graph"/></div>
            <div className="image"><img src={image9} alt="Circular graph"/></div>
          </div>

          <div className="art">
            <div className="image"><img src={image12} alt="Circular graph"/></div>
            <div className="image"><img src={image11} alt="Circular graph"/></div>
            <div className="image"><img src={image8} alt="Circular graph"/></div>
          </div>
    
        </div>
      </div>
    )
  }
}

export default withRouter(Mathart);