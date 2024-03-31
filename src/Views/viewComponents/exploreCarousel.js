import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import nineties from '../../Images/mystyle/Central_Park_Summer.jpg';
import centralpark from '../../Images/mystyle/Sleek_Spring.jpg';
import darkflorals from '../../Images/mystyle/darkflorals.JPG';
import ItemSlider from '../Sliderz/Slider';



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
 
  // Add more image objects as needed
];

const ExploreCarousel = () => {
  return (
    <Carousel
      sx={{
        width: '100%',
        height: '100%',

        
       
      }}
    >
      {images.map((image, index) => (
        <Item key={index} image={image} />
      ))}
    </Carousel>
  );
};

const Item = ({ image }) => (
  <div><ItemSlider/>
  
</div>
);

export default ExploreCarousel;
