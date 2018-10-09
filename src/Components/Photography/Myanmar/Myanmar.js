import React, { Component } from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
    
const images = importAll(require.context('./Myanmar-photos/', false, /\.(png|jpe?g|svg|JPG)$/));

const Myanmar = (props) => (
  <div className="photoGrid">
    <div className="sticky">Myanmar</div>
    { Object.keys(images).map( (t) => <img className="photos" src={images[t]}/>  ) }
  </div>
)

export default Myanmar;