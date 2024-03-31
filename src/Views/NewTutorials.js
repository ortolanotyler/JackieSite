import React from 'react';
import TextReveal from './MeetJackie/TextReveal';
import Slider1 from './aaa';
import Slider2 from './bbb';
import Slider3 from './ccc';
import Slider4 from './ddd';
import RotatingText from '../RotatingText';

const NewTutorials = () => {
  return (

    <div><TextReveal text="LATEST" />
    <div
    style = {{marginTop: '1rem'}}
    >
 
       
        <div
      style = {{margin: '1rem', color: '#745B4F'}}
      
      ><RotatingText/></div>
        <Slider1 />
      <TextReveal text='HOTTEST TRENDS' />
      <Slider2 />
      <TextReveal text='POP CULTURE OBSESSED' />
      <Slider3/>
      <TextReveal text='VINTAGE VIBES' />
      <Slider4/>
      

    </div></div>
  );
};

export default NewTutorials;
