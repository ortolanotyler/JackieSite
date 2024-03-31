import React from 'react';
import './aaa.css'; // Importing the same CSS file as the previous component

// Importing the images
import image2 from '../Images/LatteMakeupHero.png';
import image3 from '../Images/patmcgrath1.jpeg';
import image5 from '../Images/SugarPlum1.jpg';
import image6 from '../Images/LanaThumbnail.jpg';
import image7 from '../Images/SharonThumnail.jpg';
import TextReveal from '../Views/MeetJackie/TextReveal';

const cardsData = [
  {
    link: "/sharontate",
    image: image7,
    alt: "SHARON TATE",
    title: "SHARON TATE",
    description: "Iconic '60s Bridal"
  },
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Latte",
    title: "LATTE MAKEUP",
    description: "Think warm, cozy, fall!"
  },
  {
    link: "/patmcgrath",
    image: image3,
    alt: "Pat McGrath",
    title: "PAT MCGRATH",
    description: "Pat's Porcelain Doll"
  },
  {
    link: "/sugarplumfairy",
    image: image5,
    alt: "Latte",
    title: "SUGAR PLUM",
    description: "Trend Report"
  },
  {
    link: "/lanablog",
    image: image6,
    alt: "Lana",
    title: "SKIMS X Lana",
    description: "V-Day Makeup"
  },
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
        {/* Button added below */}
        <a href={link} className="read-here-btn">Read Here</a>
      </div>
    </li>
  );
};

const PopCulture = () => {
  return (
    <div>
      <div><TextReveal text= 'POP CULTURE OBSESSED' /></div>
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
    </div>
  );
};

export default PopCulture;
