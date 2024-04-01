


import React from 'react';

import TextReveal from './MeetJackie/TextReveal'; // Ensure this path is correct
import BlogCard from './BlogCard/BlogCard';

const YouTubeBanner = `${process.env.PUBLIC_URL}/Images/JackieYTHero.png`;


const Confessions = ({ title, description }) => {
    return (
       <div><div><TextReveal text="THE BLOG" /></div>

        <div>
        <div className="card" style={{ color: '#FDEDEF', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '4px', padding: '16px', marginTop: '5rem', marginRight: '5rem', marginLeft: '5rem' }}>
           
            <BlogCard
            
            />
        </div></div></div> 
    );
};

export default Confessions;
