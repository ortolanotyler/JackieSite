import React from 'react';
import './aaa.css';

// Importing the images
import image2 from '../Images/LatteMakeupHero.png';
import image5 from '../Images/SugarPlum1.jpg';
import image6 from '../Images/LanaThumbnail.jpg';
import image7 from '../Images/SharonThumnail.jpg';
import image8 from '../Images/victoriathumbnail.jpeg';
import sophia from '../Images/SophiaSquareThumbnailforArticle.jpg';
import ina from '../Images/BalkeThumb.jpeg';
import sharon from '../Images/IconicThumbnail.png';


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
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "SHARON TATE ICON",
   
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
      
        </a>
        {/* Button added below */}
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
