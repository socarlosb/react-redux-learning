import React from 'react';

const Contact = props => {
  setTimeout(() => {
    props.history.push('/about');
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        In publishing and graphic design, lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document without
        relying on meaningful content. Replacing the actual content with
        placeholder text allows designers to design the form of the content
        before the content itself has been produced.
      </p>
    </div>
  );
};

export default Contact;
