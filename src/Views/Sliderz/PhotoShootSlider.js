import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const image1 = `${process.env.PUBLIC_URL}/Images/mystyle7.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/mystyle8.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/mystyle9.jpg`;


const imageDetails = [
  {
    src: image1,
    text: "90's VIBES",
    alt: "Image 1"
  },
  {
    src: image2,
    text: "SLEEK SPRING",
    alt: "Image 2"
  },
  {
    src: image3,
    text: "LEATHER AND LACE",
    alt: "Image 3"
  },
];

const PhotoShootSlider = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);

  const maxClicks = imageDetails.length - 3;

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

export default PhotoShootSlider;
