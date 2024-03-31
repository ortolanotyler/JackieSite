import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Barbie1 from '../../Images/Barbie1.jpg';
import SophiaSquareThumbnailForArticle from '../../Images/SophiaSquareThumbnailforArticle.jpg';

// Import other images similarly for each item...

export default function MasonryImageList() {
  // Define your item data with images and titles
  const itemData = [
    {
        img:Barbie1,
        title: 'Sugar Plum',
      },
      {
        img:SophiaSquareThumbnailForArticle,
        title: 'Sugar Plum',
      },


    

   

 
  
    // Add more items with images and titles here...
  ];

  return (
    
    <Box sx={{ backgroundColor: '#EBE8E4',width: '100%', height: '100%', overflowY: 'hidden'}}>
      <ImageList backgroundColor='#EBE8E4' variant="masonry" padding = {1} cols={2} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
