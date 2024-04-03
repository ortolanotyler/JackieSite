import React from 'react';
import { Grid, Box, Paper } from '@mui/material';

import TextReveal from './MeetJackie/TextReveal';
import ExploreSiteSlider from './Sliderz/ExploreSiteSlider';
import EmailSubscribe from './viewComponents/EmailSubscribeField';
import ReviewSlider from './Sliderz/ReviewSlider';
import MeetJackieHero from '../MeetJackie1';
import Slider1 from './aaa';
import QuiltedImageList from '../ImageGrid';
import Banner1 from './Banner1';
import Quiz1 from '../Quiz1';
import QuoteBanner3 from './QuoteBanner3';
import ShopMyHero from '../ShopMyHero';
import RotatingText from '../RotatingText';
import BeigeReveal from './MeetJackie/BeigeReveal';
import VlogVideo from '../VideoComponent';
import WeExcel from './viewComponents/WeExcel/WeExcel';
import Reviews1 from './Reviews1';


function HomePage() {
  return (
    <Box sx={{ padding: '0.2rem', width: '100%', backgroundColor: 'white' }}>
     
      <Grid container spacing={0.2}>
        <TextReveal text='JACKIE WYERS'/>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1rem' }}>
            <RotatingText />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ borderRadius: '4px' }}>
            <QuiltedImageList />
          </Paper>
        </Grid>
  
        <Banner1 />
        <Grid item xs={12}>
          <ExploreSiteSlider />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '0px', color: "#745B4F", textAlign: 'center', padding: '2rem' }}>
       
            <EmailSubscribe />
          </Paper>
</Grid>

        <Grid item xs={12}>
            <MeetJackieHero />
        </Grid>

    
 

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', marginTop:'1rem' }}>
            <TextReveal text='LATEST TUTORIALS' />
            <Slider1 />
          </Paper> 
        </Grid>


   
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12} sx={{ backgroundColor:'#FDEDEF',marginTop: '0rem', display: 'flex', justifyContent: 'center', alignItems: 'right' }}>
            <Quiz1 />
          </Grid>
        </Grid>





    

        <Grid item xs={12}>
          <TextReveal text='PRODUCT REVIEWS' />
        </Grid>
        <Grid item xs={12}>

        <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1rem' }}>
          <Reviews1 /> 
      
        </Paper>
        </Grid>


        <Grid item xs={12}>
          <QuoteBanner3 />
        </Grid>

        <Grid item xs={12}>
          <TextReveal text = 'SHOP MY STYLE' />
        </Grid>


        <Grid item xs={12}>
          <ShopMyHero/>
        </Grid>
       
        <Grid item xs={12}>
        <BeigeReveal text='BEYOND BEAUTY'/>
        
        <Grid item xs={12}>
          <div href='/vlogs'>
        <VlogVideo/>     
          </div>
          
        
        </Grid>

        </Grid>


      </Grid>
    </Box>
  );
}


export default HomePage;
