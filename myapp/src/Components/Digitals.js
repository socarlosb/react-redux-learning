import React, { Component } from 'react';

class Digitals extends Component {
  render() {
    // console.log(this.props);
    const { name, age, city } = this.props;

    return (
      <div className="digital">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>City: {city}</div>
      </div>
    );
  }
}

export default Digitals;
