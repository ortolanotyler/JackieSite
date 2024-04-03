import React from 'react';
import styles from './Travel.module.css'; // Import CSS module
import PropTypes from 'prop-types';

const Travel = ({ title, image, description }) => {
  return (
    <div className={styles.travel}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

Travel.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Travel;

