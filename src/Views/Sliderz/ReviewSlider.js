import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // Make sure the path to your CSS file is correct

// Import your images
import image1 from '../../Images/Armani8.png';
import image2 from '../../Images/LanaThumbnail.jpg';
import image3 from '../../Images/SharonThumnail.jpg';


const imageDetails = [
  {
    src: image1,
    alt: "Image 1 description",
    text: "ARMANI REVIEW"
  },
  {
    src: image2,
    alt: "Image 2 description",
    text: "MY FAV LIPSTICK"
  },
  {
    src: image3,
    alt: "Image 3 description",
    text: "DRUG STORE FAVS"
  },
  // Add more images and texts as needed
];


const images = [image1, image2, image3 ];

const ReviewSlider = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);

  const maxClicks = images.length - 3;

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

  const handleLeftClick = () => {
    if (numClicks !== 0) {
      setNumClicks(numClicks - 1);
    }
  };

  const handleRightClick = () => {
    if (numClicks !== maxClicks) {
      setNumClicks(numClicks + 1);
    }
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
    // Call getItemWidth when the component mounts to ensure itemsRef is set up.
    getItemWidth();
  }, []);

  return (
   <div> <div className="items">
    {imageDetails.map((imageDetail, index) => (
      <div
        className="item"
        key={index}
        ref={(el) => (itemsRef.current[index] = el)}
        style={{
          left: `-${numClicks * getItemWidth()}px`,
          transition: 'left 0.3s',
        }}
      >
        <img src={imageDetail.src} alt={imageDetail.alt} className="item__img" />
        <a href="/" className="item__link">
          {imageDetail.text}
        </a>
      </div>
    ))}
    </div>

  </div>
  );
};

export default ReviewSlider;
