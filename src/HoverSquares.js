import React from 'react';

const HoverSquares = () => {
  const cardContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const imageCardContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    marginRight: '40px',
  };

  const imageCardStyle = {
    position: 'relative',
    borderRadius: '6px',
  };

  const imageCardShadowStyle = {
    ...imageCardStyle,
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: '90%',
    filter: 'blur(20px)',
    WebkitFilter: 'blur(20px)',
  };

  const images = [
    "https://source.unsplash.com/collection/190727/300x300",
    "https://source.unsplash.com/collection/1988224/300x300",
    "https://source.unsplash.com/collection/494263/300x300"
  ];

  return (
    <div style={cardContainerStyle}>
      {images.map((src, index) => (
        <div key={index} style={imageCardContainerStyle}>
          <img style={imageCardShadowStyle} src={src} alt="" />
          <img style={imageCardStyle} src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default HoverSquares;
