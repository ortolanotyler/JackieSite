import React from 'react';
import TextReveal from './Views/MeetJackie/TextReveal';
import VlogVideo from './VideoComponent';
import SubscribeButton from './SubscribeButton'; // Adjust the import path as necessary




const Vlogs = () => {
  return (
    <div>
      <div><TextReveal text="THE VLOG" /></div>
      
      {/* Use an <a> tag for navigation */}
        <div>
        <SubscribeButton/>
          <VlogVideo/>
          <SubscribeButton/>
        </div>
      


    </div>
  );
};

export default Vlogs;



