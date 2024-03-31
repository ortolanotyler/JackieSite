import React, { useState, useEffect } from 'react';
import styles from './WeExcel.module.css'; // Import the CSS module

const WeExcel = () => {
  const sliderContent = [
    "Confidence",
    "Expert Advice",
    "Iconic Looks",
    "The Hottest Trends",
    "Jackie Wyers"
  ];

  const [sliderCounter, setSliderCounter] = useState(0);
  const [currentContent, setCurrentContent] = useState(sliderContent[0]);

  useEffect(() => {
    const sliderValue = document.querySelector("#sliderValue");

    const slide = () => {
      sliderValue.classList.remove(styles['holder-animation']); // Update this if you have specific animation styles
      void sliderValue.offsetWidth;
      sliderValue.classList.add(styles['holder-animation']); // Update this if you have specific animation styles

      setTimeout(() => {
        setSliderCounter((prevCounter) => (prevCounter + 1) % sliderContent.length);
        setCurrentContent(sliderContent[sliderCounter]);
      }, 500); // Delay the content change for a smoother transition
    };

    const intervalId = setInterval(slide, 1000);

    return () => clearInterval(intervalId);
  }, [sliderCounter, sliderContent]);

  return (
    <div className={styles.container}>
      <div id="slider" className={styles.slider}>
        <div className={styles.span}>Switch Up Your Style with</div>
        <div className={styles.span + ' ' + styles.sliderValue} id="sliderValue">
          {currentContent}
        </div>
      </div>
    </div>
  );
};

export default WeExcel;
