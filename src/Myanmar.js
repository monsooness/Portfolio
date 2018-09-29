import React, { Component } from 'react';

class Myanmar extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const items = [...Array(100)].map((val, i) => `Item ${i}`);
    return (
      <div className="photoGrid">
       Myanmar
       <ul>
        {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
      </ul>
      </div>
    );
  }
}

export default Myanmar