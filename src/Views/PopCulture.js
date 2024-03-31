
import React from 'react';
import Tutorial from './viewComponents/Tutorial';
import Barbie from '../Images/BarbieTopHero.png';




// Example array of tutorial objects
const tutorialData = [
  { title: 'Margot Robbie - Barbie Movie', description: 'Published: March 10, 2024', img: Barbie}, 


  // ...add more tutorials as needed
];

const PopCultureView = () => {
    return (
       <div style={{
        padding: '50px',
         display: 'grid',
         gridTemplateColumns: 'repeat(2, 1fr)', // Creates two columns of equal width
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

export default PopCultureView;
