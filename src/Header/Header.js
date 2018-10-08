import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="navbar">
        <p>Photography</p>
        <p>Math Art</p>
        <p>Resume</p>
        <p>About Me</p>
      </div>
    )
  }
}

export default Header;