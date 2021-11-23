import React, { Component } from 'react'

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <nav className="nav1">
          <p>EthSwap</p>
          <p>{this.props.account}</p>
        </nav>
      </div>
    );
  }
}

export default Navbar;
