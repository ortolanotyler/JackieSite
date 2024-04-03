import React from 'react';

import Travel from './Travel2.js';
const image1 = `${process.env.PUBLIC_URL}/Images/perfume1removed.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/perfume2.png`;
// Import other images as needed

const TravelGrid = () => {
  // Define an array of travel destinations with their respective props
  const destinations = [
    {
      title: 'Destination 1',
      image: image1,
      description: 'Description for Destination 1'
    },
    {
      title: 'Destination 2',
      image: image2,
      description: 'Description for Destination 2'
    }
    // Add more destinations as needed
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {destinations.map((destination, index) => (
        <Travel key={index} title={destination.title} image={destination.image} description={destination.description} />
      ))}
    </div>
  );
};

export default TravelGrid;
