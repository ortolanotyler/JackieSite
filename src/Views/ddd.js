import React from 'react';
import './aaa.css';

// Importing the images
import image1 from '../Images/Sophia1.png';
import image2 from '../Images/SophiaSquareThumbnailforArticle.jpg';
import image3 from '../Images/Vintage2Thumbnail.jpg';
import balke from '../Images/BalkeThumb.jpeg';
import sharon from '../Images/IconicThumbnail.png'; //
const cardsData = [
  {
    link: "/sophialoren",
    image: image2,
    alt: "Sophia Loren",
    title: "SOPHIA LAUREN",
    description: "SOPHIA X SKIMS",
  },
  {
    link: "/sharontate",
    image: image3,
    alt: "Sharon Tate",
    title: "SHARON TATE",
    description: "60'S BRIDAL TUTORIAL",
  },
  {
    link: "/balkeblog",
    image: balke,
    alt: "Ina Balke 60's Iconic Tutorial",
    title: "INA BALKE",
    description: "60'S ELEGANCE",
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "SHARON TATE ICON",
   
  },
  // Add more card objects as needed...
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
        {/* "Read Here" button added for consistency with the previous example */}
        <a href={link} className="read-here-btn">Read Here</a>
      </div>
    </li>
  );
};

const Slider4 = () => {
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

export default Slider4;
