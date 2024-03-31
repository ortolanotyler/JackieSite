import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // Make sure the path to your CSS file is correct

// Import your images
import manhattancool from '../../Images/mystyle4.jpg';
import image2 from '../../Images/mystyle5.jpg';
import image3 from '../../Images/mystyle6.jpg';

const imageDetails = [
  {
    src: manhattancool,
    text: "MANHATTAN COOL",
    alt: "Fall / Winter Outfit 1"
  },
  {
    src: image2,
    text: "FALL LBD",
    alt: "Fall / Winter Outfit 2"
  },
  {
    src: image3,
    text: "DARK FLORALS",
    alt: "Fall / Winter Outfit 3"
  },
];

const FallWinterSlider = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);

  // Removed maxClicks as it is no longer needed without buttons

  const getItemWidth = () => {
    if (itemsRef.current.length > 0 && itemsRef.current[0]) {
      const item = itemsRef.current[0];
      const style = window.getComputedStyle(item);

      return (
        parseFloat(item.offsetWidth) +
        parseFloat(style.marginLeft) +
        parseFloat(style.marginRight)
      );
    }
    return 0;
  };

  // Removed handleLeftClick and handleRightClick as they are no longer needed without buttons

  useEffect(() => {
    const handleResize = () => {
      const newLeft = numClicks * getItemWidth();

      itemsRef.current.forEach((item) => {
        item.style.left = -(newLeft) + "px";
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numClicks]);

  useEffect(() => {
    getItemWidth();
  }, []);

  return (
    <div className="items">
      {imageDetails.map((detail, index) => (
        <div
          className="item"
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          style={{
            left: `-${numClicks * getItemWidth()}px`,
            transition: 'left 0.3s',
          }}
        >
          <img src={detail.src} alt={detail.alt} className="item__img" />
          <a href="/" className="item__link">
            {detail.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FallWinterSlider;
