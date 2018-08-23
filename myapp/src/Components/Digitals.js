import React from 'react';
import '../Digitals.css';

// serverless component example (UI component)
const Digitals = ({ digitals, deleteDigital }) => {
  // console.log(this.props);
  // const { digitals } = props;
  const digitalList = digitals.map(digital => {
    if (digital.age > 30) {
      return (
        <div className="digital" key={digital.id}>
          <div>Name: {digital.name}</div>
          <div>Age: {digital.age}</div>
          <div>City: {digital.city}</div>
          <button
            onClick={() => {
              deleteDigital(digital.id);
            }}
          >
            Delete Digital
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  return <div className="digital-list">{digitalList}</div>;
};

export default Digitals;
