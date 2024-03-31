import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import your images
import image1 from './Images/HomePage1.jpg';
import image2 from './Images/HomePage2.jpg';
import image3 from './Images/HomePage3.jpg';
import image4 from './Images/HomePage4.jpg';
import image5 from './Images/HomePage5.jpg';
import image6 from './Images/HomePage6.jpg';
import image7 from './Images/HomePage7.jpg';
import image8 from './Images/HomePage8.jpg';


const itemData = [
  {
    img: image1,
    title: 'Image 1',
  },
  {
    img: image2,
    title: 'Image 2',
  },
  {
    img: image3,
    title: 'Image 3',
  },
  {
    img: image4,
    title: 'Image 4',
  },
  {
    img: image5,
    title: 'Image 5',
  },
  {
    img: image6,
    title: 'Image 6',
  },
    {
        img: image7,
        title: 'Image 7',
    },
    {
        img: image8,
        title: 'Image 8',
    },

  // ... repeat for each image ...

];

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: '100%', height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={'100%'}
      marginBottom={'2rem'}
    >
      {itemData.map((item, index) => (
        <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
