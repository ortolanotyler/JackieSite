import React, { useState } from 'react';

const styles = {
  wrapper: {
    width: '90%',
    margin: '0 auto',
    maxWidth: '80rem',
  },
  header: {
    fontSize: '2.5rem',
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    color: '#444',
    textAlign: 'center',
    margin: '2rem 0',
  },
  cols: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  col: {
    width: 'calc(25% - 2rem)',
    margin: '1rem',
    cursor: 'pointer',
  },
  container: {
    transformStyle: 'preserve-3d',
    perspective: '1000px',
  },
  frontBackCommon: {
    backgroundSize: 'cover',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.25)',
    borderRadius: '10px',
    backgroundPosition: 'center',
    transition: 'transform .7s cubic-bezier(0.4, 0.2, 0.2, 1)',
    backfaceVisibility: 'hidden',
    textAlign: 'center',
    minHeight: '280px',
    height: 'auto',
    color: '#fff',
    fontSize: '1.5rem',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
  },
  front: {
    // ... front specific styles
  },
  back: {
    backgroundColor: '#cedce7',
    // ... add linear gradient and other styles
  },
  inner: {
    transform: 'translateY(-50%) translateZ(60px) scale(0.94)',
    top: '50%',
    position: 'absolute',
    left: '0',
    width: '100%',
    padding: '2rem',
    boxSizing: 'border-box',
    outline: '1px solid transparent',
    perspective: 'inherit',
    zIndex: 2,
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputStyle: {
    margin: '0.5rem',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  buttonStyle: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const FlipCardContainer = () => {
  const cards = [
    { id: 1, title: 'Diligord', imageUrl: 'https://unsplash.it/500/500/', description: 'Lorem ipsum...' },
    { id: 2, title: 'Rocogged', imageUrl: 'https://unsplash.it/511/511/', description: 'Lorem ipsum...' },
    // ... Add more cards as needed
  ];

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.header}>Parallax Flipping Cards</h1>
      <div style={styles.cols}>
        {cards.map(card => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

const FlipCard = ({ card }) => {
  const [hovered, setHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted value from card ${card.id}: ${inputValue}`);
    // Add your logic for what happens when the form is submitted
  };

  return (
    <div style={styles.col} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={styles.container}>
        <CardFront title={card.title} imageUrl={card.imageUrl} hovered={hovered} />
        <CardBack
          description={card.description}
          hovered={hovered}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

const CardFront = ({ title, imageUrl, hovered }) => (
  <div style={{ ...styles.frontBackCommon, ...styles.front, backgroundImage: `url(${imageUrl})`, transform: hovered ? 'rotateY(-180deg)' : 'rotateY(0deg)' }}>
    <div style={styles.inner}>
      <p>{title}</p>
      <span>Lorem ipsum</span>
    </div>
  </div>
);

const CardBack = ({ description, hovered, inputValue, onInputChange, onSubmit }) => (
  <div style={{ ...styles.frontBackCommon, ...styles.back, transform: hovered ? 'rotateY(0deg)' : 'rotateY(180deg)' }}>
    <div style={styles.inner}>
      <p>{description}</p>
      <form onSubmit={onSubmit} style={styles.formStyle}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          style={styles.inputStyle}
        />
        <button type="submit" style={styles.buttonStyle}>Submit</button>
      </form>
    </div>
  </div>
);

export default FlipCardContainer;
