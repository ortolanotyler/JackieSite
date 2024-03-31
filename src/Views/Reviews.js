import React from 'react';
import TextReveal from './MeetJackie/TextReveal';
import Reviews1 from './Reviews1';
import Reviews2 from './Reviews2';
import Reviews3 from './Reviews3';
import styles from './Reviews.module.css'; // Import the CSS Module

const Reviews = ({ title, description, img }) => {
    return (
        <div>
            <TextReveal text='LATEST REVIEWS' />
            <div className={styles.container}>
             
            <div className={styles.reviewItem}>
                <Reviews1 />
            </div>
            <TextReveal text='MOST POPULAR' />
            <div className={styles.reviewItem}>
                <Reviews2 />
            </div>
            <TextReveal text='DUPES AND MORE' />
            <div className={styles.reviewItem}>
                <Reviews3 />
            </div>
        </div></div>
    );
};

export default Reviews;
