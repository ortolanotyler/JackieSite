import React from 'react';
import TextReveal from './MeetJackie/TextReveal';
import FanArt from '../FanArtGallery';
import QuoteBanner from './QuoteBanner2';
import ContactForm from './viewComponents/ContactForm';
import BrandCarousel from './viewComponents/BrandCarousel';
import styles from './About.module.css'; // Ensure your CSS module is correctly set up
import RotatingText from '../RotatingText';
import FirstPageIcon from '@mui/icons-material/FirstPage';

// Images imported dynamically from the public folder using process.env.PUBLIC_URL
const AboutEmily = `${process.env.PUBLIC_URL}/Images/emily1.png`;
const leftImage = `${process.env.PUBLIC_URL}/Images/Footer5.jpg`;



const About = () => {
  return (
    <div className={styles['about-container']}>
      
      <TextReveal text='MEET JACKIE' className={styles['about-meet-jackie']} />
      <div style={{margin: '1rem', color: '#745B4F'}}><RotatingText/></div>
      <div><hr style={{ height: '0.3px', border: 'none', backgroundColor: '#745B4F', marginBottom: '0rem', marginTop: '0.5rem'}}/>
        <hr style={{ height: '0.3px', border: 'none', backgroundColor: '#745B4F' }}/>
      </div>
      <div className={styles['about-text-section']}>
        <div className={styles['about-left-section']}>
          <p style={{fontFamily: 'GFS Didot, serif', color: '#745B4F'}} className={styles['about-left-text']}>
            Hello, beauties! I'm Jackie Wyers, and my YouTube beauty journey started back in my teens (it’s been a minute!) I specialize in creating tutorials that blend the nostalgia of pop culture with vintage beauty and the latest trends. It's been an incredible ride growing up together online, reminiscing about iconic pop culture moments, and staying updated with new beauty trends, products, and today's pop culture. As a professionally trained MUA with a love of character design, I believe discovering your unique style is a significant source of confidence. Life's too short not to experiment. Join me in celebrating pop culture, trends, and beauty techniques that empower you to recreate iconic looks and find your best makeup style. Ready to switch up your style with confidence? 
            
            <FirstPageIcon className={styles.flashIcon} style={{fontFamily:'Arapey',color:'black',fontSize:'5em',verticalAlign: 'middle'}} />
            
            I've always cherished all things feminine, especially in wholesome TV shows and movies that celebrate sisterhood and style. Some favorites include "H2O: Just Add Water," "Sisterhood of the Traveling Pants,” “Hannah Montana," "Mean Girls,” and more recently, "The Barbie Movie." I love bringing these characters to life through makeup transformations to celebrate their impact on me.
            
            I also find inspiration in Taylor Swift's ever-changing eras and adore the playfulness of 60s style, a transformative era for women with bold makeup trends to match. These interests are reflected in my pop culture videos, time travel tutorials, and commitment to covering evolving trends and style. While I enjoy getting dressed up, I'm just as happy to get cozy and catch a new movie in the cinema!
            
            As a detail-oriented virgo, I excel at subtle makeup transformations for instantly recognizable inspiration. That being said, my true goal is to simplify beauty techniques that are practical for your everyday routine while also celebrating your unique interests. For example, if you're planning a beach day and want to capture the essence of Brooke Shields in "Blue Lagoon" with windswept hair and no-makeup makeup, I can break down how. Wishing the barbiecore trend was still popping like summer 2023? My tutorial serves as the perfect pink makeup for a date to feel like a Barbie! My aim is to make beauty accessible and enjoyable, helping you express yourself effortlessly in your everyday life. Together, we'll create looks that make you feel incredible and pay homage to the iconic moments and styles that inspire us. Keep experimenting to find your best personal style! xoxo Jackie.
          </p>
        </div>
        <div className={styles['about-right-section']}>
          <img src={AboutEmily} alt='Emily' className={styles['about-right-image']} />
        </div>
      </div>

      <QuoteBanner />

      <TextReveal text='COLLABORATIONS'/>
      <div className={styles['about-collaborations-section']}>
        <div style={{ display: 'flex', backgroundColor: 'white' }}>
          <div style={{ backgroundColor: '#EBE8E4', flex: 1 }}>
            <img src={leftImage} alt="Left" className={styles['about-collaborations-left-image']} />
          </div>
          <div style={{ flex: 1 }} className={styles['about-collaborations-text']}>
            <ContactForm />
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: 5, marginBottom: 5 }}>
        <BrandCarousel />
      </div>
      <TextReveal text='FAN ART GALLERY'/>
      <div style={{ flex: 1, marginBottom:'1rem',}}>
        <FanArt />
      </div>
    </div>
  );
};

export default About;
