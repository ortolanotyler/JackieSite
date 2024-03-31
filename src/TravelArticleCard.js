import React from 'react';
import './TravelArticleCard.css';
// Import MUI icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom'; // Import Link

const TravelArticleCard = ({ date, title, imageUrl, path }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <div className="article-content">
        <div className="article-date">{date}</div>
        <div className="article-title">{title}</div>
  
        <div className="article-social-links">
          <button><FacebookIcon /></button>
          <button><TwitterIcon /></button>
          <button><PinterestIcon /></button>
        </div>
        {/* Wrap the Read More button with Link and use dynamic path */}
        <Link to={path} className="read-more-link">
          <button className="read-more">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default TravelArticleCard;
