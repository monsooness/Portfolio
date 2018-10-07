import React, { Component } from 'react';


function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
}
    
  
const images = importAll(require.context('./Photos/India/', false, /\.(png|jpe?g|svg)$/));
const x = [1,2]
console.log(images);

const India = (props) => (
  <div className="photoGrid">
    { Object.keys(images).map( (t) => <img src={images[t]}/>  ) }
  </div>
)

export default India;
