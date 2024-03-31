
import React from 'react';
import Tutorial from './viewComponents/Tutorial';
import SugarPlum from '../Images/SugarPlumHero.png';
import LatteMakeup from '../Images/LatteMakeupHero.png';




// Example array of tutorial objects
const tutorialData = [
  { title: 'Sugar Plum Fairy', description: 'Published: March 10, 2024', img: SugarPlum}, 
  { title: 'LatteMakeup', description: 'Published: March 10, 2024', img: LatteMakeup}, 

  // ...add more tutorials as needed
];

const HotTrendsView = () => {
    return (
       <div style={{
        padding: '50px',
         display: 'horizontal',
         gridGap: '20px', // Adjust the gap between grid items
         maxWidth: '800px', // Adjust the maximum width of the grid container
         margin: 'auto' // Centers the grid container in the parent
       }}> 
        {tutorialData.map((tutorial, index) => (
          <Tutorial
            key={index} // Consider using a unique ID instead of index if possible
            title={tutorial.title}
            description={tutorial.description}
            img={tutorial.img}
          />
        ))}
       </div>
    );
};

export default HotTrendsView;
