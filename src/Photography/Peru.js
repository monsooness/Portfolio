import React, { Component } from 'react';

class Peru extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const items = [...Array(100)].map((val, i) => `Item ${i}`);
    return (
      <div className="photoGrid">
       Peru
       <ul>
        {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
      </ul>
      </div>
    );
  }
}

export default Peru