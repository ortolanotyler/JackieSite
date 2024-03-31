import React from 'react';

const Card = ({ image, tag, title, description, authorImg, authorName, timeAgo }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={image} alt={title} />
            </div>
            <div className="card-body">
                <span className={`tag ${tag.className}`}>{tag.label}</span>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="user">
                    <img src={authorImg} alt={authorName} />
                    <div className="user-info">
                        <h5>{authorName}</h5>
                        <small>{timeAgo}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


