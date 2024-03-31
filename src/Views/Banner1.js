import React from 'react';

const Banner1 = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: '2vw' }}>
      <p style={{
          backgroundColor: '#FDEDEF',
          color: '#745B4F',
          fontFamily: 'GFS Didot, serif',
          fontSize: 'clamp(1.5rem, 2.5vw, 2.0rem)', // Adjusts size based on viewport width
          textAlign: 'center', // Centers text without specific margin
          padding: '1vw', // Responsive padding
          maxWidth: '1000px', // Maximum width for the text
          margin: '0 auto', // Centers the paragraph in the div
        }}
      >
        Watch tutorials, read articles, browse product reviews and take quizzes below!
      </p>
    </div>
  );
};

export default Banner1;
