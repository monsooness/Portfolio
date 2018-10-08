import React, { Component } from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
    
const images = importAll(require.context('./Photos/Bhutan/', false, /\.(png|jpe?g|svg|JPG)$/));

const Bhutan = (props) => (
  <div className="photoGrid">
    <div className="sticky">Bhutan</div>
    { Object.keys(images).map( (t, index) => <img className="photos" src={images[t]}/>  ) }
  </div>
)

export default Bhutan