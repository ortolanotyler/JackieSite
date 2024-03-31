import React from 'react';
import RotatingText from '../RotatingText';

const TeeSpring = () => {
  return (
    <div>
    <div
      style = {{margin: '1rem', color: '#745B4F'}}
      
      ><RotatingText/></div>
    <iframe
      style={{ borderRadius: '10px'}}
      src="https://embed.creator-spring.com/widget?slug=shop-jackie-wyers&per=12&bg=ffffff&txtcolor=000000&currency=&page=1"
      title="Vintage Vibes Merch Merch store powered by Spring"
      width="100%"
      height="500"
      data-reactroot=""
    ></iframe>

    </div>
  );
};

export default TeeSpring;
