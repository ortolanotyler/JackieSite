import React from 'react';
import TravelArticleCard from './TravelArticleCard';
import "./TravelArticleList.css";

import TextReveal from './Views/MeetJackie/TextReveal';

const image1 = `${process.env.PUBLIC_URL}/Images/Disney1Thumbnail.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Disney1Thumbnail.png`;


const articles = [
    {
        date: '04/01/2024',
        title: 'Walt Disney World Beach Club Resort Review',
        image: image1,
        path: '/DisneyReview1',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/DisneyReview2',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/DisneyReview2',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/DisneyReview2',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/DisneyReview2',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/DisneyReview2',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/DisneyReview2',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/DisneyReview2',
    },
    // Add more articles as needed
];

const TravelArticleList = () => {
    return (
        <div>
            
            <TextReveal text='TRAVEL' />
            <div className="article-list">
                {articles.map((article, index) => (
                    <TravelArticleCard
                        key={index}
                        date={article.date}
                        title={article.title}
                        imageUrl={article.image}
                        path={article.path} // Pass the path prop here
                    />
                ))}
            </div>
           
        </div>
    );
};

export default TravelArticleList;
