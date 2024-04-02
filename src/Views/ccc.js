import React from 'react';
import './aaa.css';

const image1 = `${process.env.PUBLIC_URL}/Images/Barbie1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/LatteMakeupHero.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/patmcgrath1.jpeg`;


const cardsData = [
  {
    link: "/barbie",
    image: image1,
    alt: "Margot Robbie Barbie Makeup Tutorial",
    title: "MARGOT AS BARBIE",
    description: "Margot Robbie slays"
  },
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Latte Makeup Tutorial",
    title: "LATTE MAKEUP",
    description: "Think warm, cozy, fall!"
  },
  {
    link: "/patmcgrath",
    image: image3,
    alt: "Pat McGrath Makeup Tutorial",
    title: "PAT MCGRATH",
    description: "Pat's Porcelain Doll"
  },
  // Add more card objects as needed...
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
        {/* "Read Here" button added for consistency with the previous example */}
        <a href={link} className="read-here-btn">Read Here</a>
      </div>
    </li>
  );
};

const Slider3 = () => {
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

export default Slider3;
