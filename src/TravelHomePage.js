// App.js or another component
import React from 'react';
import TravelArticleList from './TravelArticleList';

const articles = [
  {
    date: '12/12/2019',
    title: 'Winter Day Trip Ideas From Toronto - #MDPHoliday19',
    hashtag: '#MDPHoliday19',
    imageUrl: 'path/to/toronto-image.jpg', // Replace with your image path
  },
  {
    date: '10/24/2019',
    title: '#MVFall19: London + Fall Must Haves',
    hashtag: '#MVFall19',
    imageUrl: 'path/to/london-image.jpg', // Replace with your image path
  },
  // Add more articles as needed
];

function TravelHomePage() {
  return (
    <div className="App">
      <TravelArticleList articles={articles} />
    </div>
  );
}

export default TravelHomepage;
