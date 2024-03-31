import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import nineties from '../../Images/mystyle/Central_Park_Summer.jpg';
import centralpark from '../../Images/mystyle/Sleek_Spring.jpg';
import darkflorals from '../../Images/mystyle/darkflorals.JPG';
import manhattancool from '../../Images/mystyle/MANHATTAN_COOL.jpeg';
import mauiretro from '../../Images/mystyle/MAUI_RETRO_FLORAL.jpg';
import parisprincess from '../../Images/mystyle/PARIS_PRINCESS.jpg';
import sleekspring from '../../Images/mystyle/Sleek_Spring.jpg';
import stripesandhearts from '../../Images/mystyle/STRIPES_AND_HEARTS.jpg';


const images = [
  {
    id: 1,
    src: nineties, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  {
    id: 2,
    src: centralpark, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  {
    id: 3,
    src: darkflorals, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  {
    id: 4,
    src: manhattancool, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  {
    id: 5,
    src: mauiretro, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  {
    id: 6,
    src: parisprincess, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  {
    id: 7,
    src: sleekspring, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  {
    id: 8,
    src: stripesandhearts, // Use the imported image
    alt: '90s VIBE', // Alt text for the image
    title: '90s VIBE', // Title or description for the image
  },
  // Add more image objects as needed
];

const CarouselComponent = () => {
  return (
    <Carousel
      sx={{
        marginBottom: 1,
        objectFit:'contain',
        display: 'fixed',
        justifyContent: 'space-between', // To evenly space the images
      }}
    >
      {images.map((image, index) => (
        <Item key={index} image={image} />
      ))}
    </Carousel>
  );
};

const Item = ({ image }) => (
  <div><Paper
    sx={{
      padding: '5rem',
      flex: 'fill', // To make each image responsive and fill the available space
      display: 'flex',
      justifyContent: 'space-between', // To evenly space the images
      alignItems: 'horizontal',
      marginBottom: '5px',
    }}
  >
    <div><img
      src={nineties}
      alt="Carousel Item"
      style={{ padding: '0.1rem', maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img
      src={centralpark}
      alt="Carousel Item"
      style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img
      src={darkflorals}
      alt="Carousel Item"
      style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img 
    src={manhattancool}
    alt="Carousel Item"
    style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img
    src={mauiretro}
    alt="Carousel Item"
    style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img
    src={parisprincess}
    alt="Carousel Item"
    style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img
      src={sleekspring}
      alt="Carousel Item"
      style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img
      src={stripesandhearts}
      alt="Carousel Item"
      style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    <img
      src={manhattancool}
      alt="Carousel Item"
      style={{ padding: '0.1rem',maxWidth: '32%', height: 'auto' }} // Make the image responsive
    />
    </div>
  </Paper>
  
</div>
);

export default CarouselComponent;
