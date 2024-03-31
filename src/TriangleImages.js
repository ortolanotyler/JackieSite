import React from 'react';
import styles from './TriangleImages.module.css';

const TriangleImages = ({ leftImage, rightImage, backgroundColor }) => {
  // Inline style for dynamic background color
  const bodyStyle = {
    background: `radial-gradient(circle, ${backgroundColor.start}, ${backgroundColor.end})`,
  };

  return (
    <div className={styles.body} style={bodyStyle}>
      <img src={leftImage} alt="Left" className={`${styles.tri} ${styles.alt} ${styles.img}`} />
      <img src={rightImage} alt="Right" className={`${styles.tri} ${styles.img}`} />
    </div>
  );
};

export default TriangleImages;
