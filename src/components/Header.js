import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header navbar navbar-dark bg-dark">
        <div className="container">
          <div className="row m-auto">
            <i class="fa fa fa-clock-o fa-4x text-white" />
            <div className="h1 ml-3 my-auto text-light">{this.props.title}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
