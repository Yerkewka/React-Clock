import React, { Component } from 'react';
import Header from './Header';
import Clock from './Clock';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Мои часы на React JS'
    };
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <Clock />
      </div>
    );
  }
}

export default App;
