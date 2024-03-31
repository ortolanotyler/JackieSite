import React from 'react';
import './TextReveal.css'; // Import the CSS

// Add a prop parameter to the function
const TextReveal = (props) => {
  // Use the `text` prop to dynamically set the text
  return (
    <>
      <div className="hero">
        <h1 className="text-reveal">
          <span>{props.text}</span>
          <span aria-hidden="true">{props.text}</span>
        </h1>
      </div>
    </>
  );
};

export default TextReveal;

