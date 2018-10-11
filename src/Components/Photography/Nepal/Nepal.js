import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
    
const images = importAll(require.context('./Nepal-photos/', false, /\.(png|jpe?g|svg)$/));

const Nepal = (props) => (
  <div className="photoGrid">
    <div className="sticky">Nepal</div>
    { Object.keys(images).map( (t) => <img className="photos" src={images[t]}/>  ) }
  </div>
)

export default Nepal