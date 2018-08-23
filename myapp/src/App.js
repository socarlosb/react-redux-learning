import React, { Component } from 'react';
import Digitals from './Components/Digitals';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Digitals name="Isa" age="35" city="Lisbon" />
        <Digitals name="Carlos" age="36" city="Porto" />
      </div>
    );
  }
}

export default App;
