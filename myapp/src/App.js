import React, { Component } from 'react';
import Digitals from './Components/Digitals';
class App extends Component {
  state = {
    digitals: [
      { name: 'Carlos', age: '36', city: 'Porto', id: 1 },
      { name: 'Isa', age: '35', city: 'Lisbon', id: 2 },
      { name: 'Bruno', age: '30', city: 'Porto', id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Digitals digitals={this.state.digitals} />
      </div>
    );
  }
}

export default App;
