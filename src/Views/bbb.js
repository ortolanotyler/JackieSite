import React from 'react';
import './aaa.css';

// Importing the images
import image1 from '../Images/LatteMakeupHero.png';
import image2 from '../Images/SugarPlum1.jpg';
import image3 from '../Images/LanaThumbnail.jpg';
import image4 from '../Images/patmcgrath1.jpeg';

const cardsData = [
  {
    link: "/latteMakeup",
    image: image1,
    alt: "Latte",
    title: "LATTE MAKEUP",
    description: "Think warm, cozy, fall!"
  },
  {
    link: "/sugarplumfairy",
    image: image2,
    alt: "Sugar Plum",
    title: "SUGAR PLUM",
    description: "Trend Report"
  },
  {
    link: "/lanablog",
    image: image3,
    alt: "Lana",
    title: "SKIMS X Lana",
    description: "V-Day Makeup"
  },
  {
    link: "/patmcgrath",
    image: image4,
    alt: "Pat McGrath",
    title: "Pat McGrath",
    description: "Viral Glossy Craze"
  },
  // ... add more card objects as needed ...
];

const Card = ({ link, image, alt, title, description }) => {
  return (
    <li className="card">
      <a className="card-image" href={link} style={{ backgroundImage: `url(${image})` }}>
        <img src={image} alt={alt} />
      </a>
      <div className="card-description">
        <a href={link}>
          <h2>{title}</h2>
          <p>{description}</p>
        </a>
        {/* "Read Here" button added */}
        <a href={link} className="read-here-btn">Read Here</a>
      </div>
    </li>
  );
};

const Slider2 = () => {
  return (
    <ul className="card-list">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          link={card.link}
          image={card.image}
          alt={card.alt}
          title={card.title}
          description={card.description}
        />
      ))}
    </ul>
  );
};

export default Slider2;