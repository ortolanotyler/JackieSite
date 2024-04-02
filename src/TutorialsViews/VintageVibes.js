import React from 'react';
import './aaa.css'; // Importing the same CSS file as the previous components
import TextReveal from '../Views/MeetJackie/TextReveal';

// Importing the images
const image3 = `${process.env.PUBLIC_URL}/Images/SophiaSquareThumbnailforArticle.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/SharonThumnail.jpg`;
const sharon = `${process.env.PUBLIC_URL}/Images/IconicThumbnail.png`;

const cardsData = [
  {
    link: "/sharontate",
    image: image7,
    alt: "SHARON TATE",
    title: "SHARON TATE",
    description: "Iconic '60s Bridal"
  },
  {
    link: "/sophialoren",
    image: image3,
    alt: "Sophia Loren",
    title: "SOPHIA LOREN",
    description: "NEED DESCRIPTION"
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "SHARON TATE ICON",
   
  },
  // Add more card objects as needed
];

const Card = ({ link, image, alt, title, description }) => {
  return (
    <li className="card">
      <a className="card-image" href={link}>
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

const VintageVibes = () => {
  return (
    <div>
      <div><TextReveal text= 'TIME TRAVEL TUTORIALS' /></div>
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

export default VintageVibes;
