import React, { Component } from 'react';

class Digitals extends Component {
  render() {
    // console.log(this.props);
    const { digitals } = this.props;
    const digitalList = digitals.map(digital => {
      return (
        <div className="digital" key={digital.id}>
          <div>Name: {digital.name}</div>
          <div>Age: {digital.age}</div>
          <div>City: {digital.city}</div>
        </div>
      );
    });
    return <div className="digital-list">{digitalList}</div>;
  }
}

export default Digitals;
