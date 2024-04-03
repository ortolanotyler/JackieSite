import React from 'react';
import TextReveal from './MeetJackie/TextReveal';
import Reviews1 from './Reviews1';
import Reviews2 from './Reviews2';
import Reviews3 from './Reviews3';

const Reviews = ({ title, description, img }) => {
    return (
        <div>
            <TextReveal text='LATEST REVIEWS' />
            <div >
             
            <div >
                <Reviews1 />
            </div>
            <TextReveal text='MOST POPULAR' />
         
            <TextReveal text='DUPES AND MORE' />
   
        </div></div>
    );
};

export default Reviews;
