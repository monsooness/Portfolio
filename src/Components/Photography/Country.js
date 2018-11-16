import React from 'react';

const Country = ({photos}) => (
  <div className="photoGrid">
    <div className="sticky">Thailand</div>
    { Object.keys(photos).map( (t, index) => <img className="photos" src={photos[t]}/>  ) }
  </div>
)

export default Country