import React from 'react';
import MeetJackie1 from './MeetJackie1.png';
import Lipstick from './Lipstick.png';
import { Link } from 'react-router-dom';
import './MeetJackie1.css';
const MeetJackieHero = () => {
    return (
        <div className="meet-jackie-hero">
            {/* Left Image */}
            <div className="meet-jackie-hero-content">
                {/* Text Content */}
                <div className="meet-jackie-hero-text">
                    <h1>Meet Jackie</h1>
                    <p>
                        Hello, beauties! I'm Jackie Wyers, and my YouTube beauty journey started back in my teens (it’s been a minute!) I specialize in creating tutorials that blend the nostalgia of pop culture with vintage beauty and the latest trends. It's been an incredible ride growing up together online, reminiscing about iconic pop culture moments, and staying updated with new beauty trends, products, and today's pop culture.
                    </p>
                    <p>
                        As a professionally trained MUA with a love of character design, I believe discovering your unique style is a significant source of confidence. Life's too short not to experiment. Join me in celebrating pop culture, trends, and beauty techniques that empower you to recreate iconic looks and find your best makeup style. Ready to switch up your style with confidence?
                    </p>
                    {/* Learn More Link */}
                    <Link to="/about">
                        Learn More <span>&rarr;</span>
                    </Link>
                </div>
            </div>

            {/* Right Image with Lipstick Overlay */}
            <div className="meet-jackie-hero-image">
                <img src={MeetJackie1} alt="Jackie Right" />
                <img src={Lipstick} alt="Lipstick" className="lipstick-image" />
            </div>
        </div>
    );
};

export default MeetJackieHero;


