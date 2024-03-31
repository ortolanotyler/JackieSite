import React from 'react';
import image1 from '../Images/perfume1removed.png';
import image2 from '../Images/perfume2.png';
import image3 from '../Images/JickyThumbnail.png';

// Define the link URLs here
const linkURLs = ['/home1', '/home2', '/home3'];

const Reviews2 = () => {
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allow the items to wrap as needed
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto', // Adjust height based on content
    padding: '100px', // Add some padding around the container
  };

  const imageCardContainerStyle = {
    position: 'relative',
    width: 'calc(25% - 40px)', // Make images smaller and adjust based on desired padding/margin
    paddingBottom: 'calc(25% - 40px)', // Adjust padding-bottom to maintain square aspect ratio
    margin: '20px', // Space around each card
    overflow: 'hidden', // Hide overflow to prevent image cut-off
  };

  const imageStyleBase = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '1px',
    objectFit: 'contain', // Make the image fit within its container
  };

  const imageCardStyle = {
    ...imageStyleBase,
    zIndex: '1', // Ensure the image is above the shadow
  };

  // Adjusted to match the shadow style from Reviews1
  const imageCardShadowStyle = {
    ...imageStyleBase,
    zIndex: '-1', // Ensure shadow is behind the image
    filter: 'blur(20px)',
    WebkitFilter: 'blur(20px)',
    transform: 'scale(1.05)', // Slightly enlarge for shadow effect
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: '90%',
  };

  const images = [image1, image2, image3];

  return (
    <div style={cardContainerStyle}>
      {images.map((src, index) => (
        <div key={index} style={imageCardContainerStyle}>
          <a href={linkURLs[index]} target="_blank" rel="noopener noreferrer">
            <img style={imageCardShadowStyle} src={src} alt="" /> {/* Shadow Image */}
            <img style={imageCardStyle} src={src} alt="" /> {/* Main Image */}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Reviews2;
