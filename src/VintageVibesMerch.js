import React from 'react';
import TeeSpring from './Views/TeeSpring';
import TextReveal from './Views/MeetJackie/TextReveal';
import './VintageVibesMerch.css'; // Assume you have a CSS file for styles

const VintageVibesMerch = () => {
    return (
        <div className="merch-container">  
<div>
<TextReveal text='VINTAGE VIBES MERCH' />
     
            <TeeSpring />
        </div>
       </div>
    )
};

export default VintageVibesMerch;
