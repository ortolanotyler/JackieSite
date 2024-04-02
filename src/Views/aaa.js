import React from 'react';
import './aaa.css';

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/LatteMakeupHero.png`;
const image5 = `${process.env.PUBLIC_URL}/Images/SugarPlum1.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/LanaThumbnail.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/SharonThumnail.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/victoriathumbnail.jpeg`;
const sophia = `${process.env.PUBLIC_URL}/Images/SophiaSquareThumbnailforArticle.jpg`;
const ina = `${process.env.PUBLIC_URL}/Images/BalkeThumb.jpeg`;
const sharon = `${process.env.PUBLIC_URL}/Images/IconicThumbnail.png`;

const cardsData = [
  {
    link: "/sharontate",
    image: image7,
    alt: "Sharon Tate in iconic 1960s bridal makeup and attire",
    title: "Sharon Tate",
    description: "Iconic '60s Bridal",
  },
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Latte Makeup",
    description: "Think warm, cozy, fall!",
  },
  {
    link: "/sugarplumfairy",
    image: image5,
    alt: "Sugar Plum Fairy makeup trend report",
    title: "Sugar Plum Fairy",
    description: "Trend Report",
  },
  {
    link: "/lanablog",
    image: image6,
    alt: "SKIMS collaboration with Lana for Valentine's Day makeup",
    title: "SKIMS X Lana",
    description: "V-Day Makeup",
  },
  {
    link: "/victoriasecret",
    image: image8,
    alt: "Victoria's Secret fashion show 2014 vibes",
    title: "Victoria's Secret",
    description: "2014 vibes are so back",
  },
  {
    link: "/sophialoren",
    image: sophia,
    alt: "Sophia Loren, the charismatic queen of classic cinema",
    title: "Sophia Loren",
    description: "The Charismatic Queen",
  },
  {
    link: "/balkeblog",
    image: ina,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "60's Legend Ina Balke",
    description: "European Chique",
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "Iconic Sharon Tate makeup tutorial",
    title: "SHARON TATE ICON",
    description: "", // Provided an empty description to keep the structure consistent.
  },
];

const Card = ({ link, image, alt, title, description }) => {
  return (
    <li className="card">
      <a className="card-image" href={link}>
        <img src={image} alt={alt} />
      </a>
      <div className="card-description">
        <a href={link}><h2>{title}</h2></a>
        {description && <p>{description}</p>} {/* Conditional rendering of description */}
        <a href={link} className="read-here-btn">Read Here</a>
      </div>
    </li>
  );
};

const Slider1 = () => {
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

export default Slider1;
