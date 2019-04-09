import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import Country from './Country.js'
import './Photography.css'

class Photography extends Component {
  // constructor(props) {
  //   super(props)
  // }
  
  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  render() {
    let bhutan = this.importAll(require.context('./Photos/Bhutan/', false, /\.(png|jpe?g|svg|JPG)$/));
    let india = this.importAll(require.context('./Photos/India/', false, /\.(png|jpe?g|svg|JPG)$/));
    let myanmar = this.importAll(require.context('./Photos/Myanmar/', false, /\.(png|jpe?g|svg|JPG)$/));
    let nepal = this.importAll(require.context('./Photos/Nepal/', false, /\.(png|jpe?g|svg|JPG)$/));
    let peru = this.importAll(require.context('./Photos/Peru/', false, /\.(png|jpe?g|svg|JPG)$/));
    let thailand = this.importAll(require.context('./Photos/Thailand/', false, /\.(png|jpe?g|svg|JPG)$/));

    return (
      <div className="container">
        <Country photos={bhutan} name={'Bhutan'} />
        <Country photos={myanmar} name={'Myanmar'} />
        <Country photos={thailand} name={'Thailand'} />
        <Country photos={india} name={'India'} />
        <Country photos={nepal} name={'Nepal'} />
        <Country photos={peru} name={'Peru'} />
      </div>
    )
  }
}

export default withRouter(Photography);