import React, { Component } from 'react';
import AddDigital from './Components/addDigital';
import Digitals from './Components/Digitals';
class App extends Component {
  state = {
    digitals: [
      { name: 'Carlos', age: '36', city: 'Porto', id: 1 },
      { name: 'Isa', age: '35', city: 'Lisbon', id: 2 },
      { name: 'Bruno', age: '30', city: 'Porto', id: 3 }
    ]
  };
  addDigital = digital => {
    digital.id = Math.random();
    // spread operator
    let newDigitals = [...this.state.digitals, digital];
    this.setState({
      digitals: newDigitals
    });
    // console.log(digital);
  };
  deleteDigital = id => {
    let newDigitals = this.state.digitals.filter(digital => {
      return digital.id !== id;
    });
    this.setState({
      digitals: newDigitals
    });
  };

  componentDidMount = () => {
    console.log('its mounted!');
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log('updated!');
    console.log(prevProps, prevState);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Digitals
          deleteDigital={this.deleteDigital}
          digitals={this.state.digitals}
        />
        <AddDigital addDigital={this.addDigital} />
      </div>
    );
  }
}

export default App;
