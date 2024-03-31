import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from './Images/Footer3.jpg';
import image2 from './Images/Footer3.jpg';
import image3 from './Images/Footer3.jpg';

export default function ImageList1() {
  const itemData = [
    {
      img: image1,
      title: 'Breakfast',
    },
    {
      img: image2,
      title: 'Burger',
    },
    {
      img: image3,
      title: 'Camera',
    },
  ];

  return (
   <div>
    <div 
      style={{
        fontSize: '5rem',
        padding: '0rem',
        fontFamily: 'GFS Didot, serif',
        display: 'flex',
        justifyContent: 'left',
        marginLeft: '5rem',
        alignItems: 'center',
        marginBottom: '1px',
        backgroundColor: 'white',
      }}
   
   
   ><p>Explore The Site:</p></div>
    <ImageList sx={{ padding: '1rem', maxWidth: '95%', alignItems:'center' }} cols={3} rowHeight={'auto'}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList></div>
  );
}
