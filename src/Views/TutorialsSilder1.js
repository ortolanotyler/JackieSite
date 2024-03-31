import React, { useState, useEffect } from 'react';
import './TutorialSlider.css';

// Importing the images
import image1Full from '../../Images/Barbie1.jpg';
import image1Thumb from '../../Images/Barbie1.jpg';
import image2Full from '../../Images/Barbie1.jpg';
import image2Thumb from '../../Images/Barbie1.jpg';
import image3Full from '../../Images/Barbie1.jpg';
import image3Thumb from '../../Images/Barbie1.jpg';


const cardsData = [
  {
    link: "/barbie",
    imageFull: image1Full,
    imageThumb: image1Thumb,
    alt: "Psychopomp",
    title: "Psychopomp",
    description: "Japanese Breakfast"
  },
  {
    link: "https://inlovewithaghost.bandcamp.com/album/lets-go",
    imageFull: image2Full,
    imageThumb: image2Thumb,
    alt: "let's go",
    title: "let's go",
    description: "In Love With A Ghost"
  },
  {
    link: "https://vulfpeck.bandcamp.com/album/the-beautiful-game",
    imageFull: image3Full,
    imageThumb: image3Thumb,
    alt: "The Beautiful Game",
    title: "The Beautiful Game",
    description: "Vulfpeck"
  },

  // ... add more card objects as needed ...
];

const Card = ({ link, image, alt, title, description }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setLoaded(true);
    };
  }, [image]);

  return (
    <li className="card">
      <a className="card-image" href={link} style={{ backgroundImage: `url(${loaded ? image : ''})` }}>
        <img src={loaded ? image : ''} alt={alt} onLoad={() => setLoaded(true)} style={{ opacity: loaded ? 1 : 0 }} />
      </a>
      <a className="card-description" href={link} >
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </li>
  );
};

const TutorialsSlider1 = () => {
    return (
      <ul className="card-list">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            link={card.link}
            image={card.imageFull} // Use `imageFull` instead of `image`
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </ul>
    );
  };

  export default TutorialsSlider1;