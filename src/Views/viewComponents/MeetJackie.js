import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import image1 from '../../Images/Footer1.jpg';
import image2 from '../../Images/Footer2.png';

export default function MeetJackie() {
  const theme = useTheme();
  // Use a breakpoint to determine when the screen is smaller (e.g., smaller than md)
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const itemData = [
    {
      img: image1,
      title: 'Breakfast',
    },
    {
      img: image2,
      title: 'Burger',
    },
  ];

  return (
    <div>
      <ImageList sx={{ wordSpacing: '100px', padding: '1rem', maxWidth: '95%', alignItems: 'flex' }} cols={matches ? 1 : 2} rowHeight={'auto'}>
        {itemData.map((item, index) => (
          <React.Fragment key={index}>
            {index === 1 && (
              <ImageListItem key="meet-jackie-text">
                <div
                  style={{
                    width: '100%', // Adjusted to take the full width
                    fontSize: '1rem',
                    fontFamily: 'GFS Didot, serif',
                    textAlign: 'center',
                    backgroundColor: 'white',
                  }}
                >
                 <div> <p>Meet Jackie:</p>
                  <p>Hello, beauties! I'm Jackie Wyers, and my YouTube beauty journey started back in my teens (it’s been a minute!) I specialize in
creating tutorials that blend the nostalgia of pop culture with vintage beauty and the latest trends. It's been an incredible ride
growing up together online, reminiscing about iconic pop culture moments, and staying updated with new beauty trends, products,
and today's pop culture. </p> </div>
                </div>
              </ImageListItem>
            )}

            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </React.Fragment>
        ))}
      </ImageList>
    </div>
  );
}
