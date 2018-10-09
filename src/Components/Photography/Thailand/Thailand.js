import React, { Component } from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
    
const images = importAll(require.context('./Thailand-photos/', false, /\.(png|jpe?g|svg|JPG)$/));

const Thailand = (props) => (
  <div className="photoGrid">
    <div className="sticky">Thailand</div>
    { Object.keys(images).map( (t, index) => <img className="photos" src={images[t]}/>  ) }
  </div>
)

export default Thailand;