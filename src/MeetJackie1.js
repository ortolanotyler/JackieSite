import React from 'react';
import { Link } from 'react-router-dom';
import TextFit from 'react-textfit'; // Import TextFit component
import styles from './MeetJackie1.module.css'; // Import CSS module
import MeetJackie1 from './MeetJackie1.png';
import Lipstick from './Lipstick.png';

const MeetJackieHero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>Meet Jackie</h1>
                    <TextFit mode="multi" max={60}>
                        <p>
                            Hello, beauties! I'm Jackie Wyers, and my YouTube beauty journey started back in my teens (it’s been a minute!) I specialize in creating tutorials that blend the nostalgia of pop culture with vintage beauty and the latest trends. It's been an incredible ride growing up together online, reminiscing about iconic pop culture moments, and staying updated with new beauty trends, products, and today's pop culture.
                        </p>
                        <p>
                            As a professionally trained MUA with a love of character design, I believe discovering your unique style is a significant source of confidence. Life's too short not to experiment. Join me in celebrating pop culture, trends, and beauty techniques that empower you to recreate iconic looks and find your best makeup style. Ready to switch up your style with confidence?
                        </p>
                    </TextFit>
                    <Link to="/about" className={styles.heroTextLink}>
                        Learn More <span>&rarr;</span>
                    </Link>
                </div>
            </div>

            <div className={styles.heroImage}>
                <img src={MeetJackie1} alt="Jackie Right" className={styles.heroImagePrimary} />
                <img src={Lipstick} alt="Lipstick" className={styles.lipstickImage} />
            </div>
        </div>
    );
};

export default MeetJackieHero;
