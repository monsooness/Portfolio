import React from 'react';

const Country = ({photos,name}) => (
  <div className="photoGrid">
    <div className="sticky">{name}</div>
    { Object.keys(photos).map( (t, index) => <img className="photos" src={photos[t]}/>  ) }
  </div>
)

export default Country