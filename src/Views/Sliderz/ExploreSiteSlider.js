import React, { useState, useEffect, useRef } from 'react';
import './ExploreSlider.css'; // Make sure the path to your CSS file is correct

// Import your images
// Instead of direct import statements for images, use the PUBLIC_URL for dynamic path resolution
const image1 = `${process.env.PUBLIC_URL}/Images/LatteMakeupHero.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Barbie1.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/SophiaSquareThumbnailforArticle.jpg`;


const imageDetails = [
  {
    src: image1,
    alt: "Latte Makeup Hero",
    text: "TRENDS",
    hoverBg: '../../Images/margotbackground.png', // This is an example hover background image
    url: "/trends", // Destination URL
  },
  {
    src: image2,
    alt: "Barbie Pop Culture",
    text: "POP CULTURE",
    hoverBg: '../../Images/lattebackground.png', // This is an example hover background image
    url: "/popculture", // Destination URL
  },
  {
    src: image3,
    alt: "Sophia Time Travel Tutorial",
    text: "TIME TRAVEL TUTORIALS",
    hoverBg: '../../Images/sophiabackground.png', // This is an example hover background image
    url: "/timetraveltutorials", // Destination URL
  },
  // Add more images, texts, and URLs as needed
];

const ExploreSiteSlider = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);
  const images = [image1, image2, image3];
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
    getItemWidth();
  }, []);

  return (
    <div className="slider-container">
      <div className="items">
        {imageDetails.map((imageDetail, index) => (
          <div
            className={`item item-${index}`}
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{
              left: `-${numClicks * getItemWidth()}px`,
              transition: 'left 0.1s',
            }}
          >
            <img src={imageDetail.src} alt={imageDetail.alt} className="item__img" />
            <div className="item__overlay">
              <a href={imageDetail.url} className="item__link">
                {imageDetail.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSiteSlider;
