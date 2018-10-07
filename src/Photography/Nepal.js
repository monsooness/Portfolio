import React, { Component } from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
    
const images = importAll(require.context('./Photos/Nepal/', false, /\.(png|jpe?g|svg)$/));

const Nepal = (props) => (
  <div className="photoGrid">
    { Object.keys(images).map( (t) => <img className="photos" src={images[t]}/>  ) }
  </div>
)

export default Nepal