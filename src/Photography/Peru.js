import React, { Component } from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
    
const images = importAll(require.context('./Photos/Peru/', false, /\.(png|jpe?g|svg)$/));

const Peru = (props) => (
  <div className="photoGrid">
    { Object.keys(images).map( (t) => <img className="photos" src={images[t]}/>  ) }
  </div>
)

export default Peru