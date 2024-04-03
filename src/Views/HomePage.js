import React from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';

import TextReveal from './MeetJackie/TextReveal';
import ExploreSiteSlider from './Sliderz/ExploreSiteSlider';
import EmailSubscribe from './viewComponents/EmailSubscribeField';
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
import Reviews1 from './Reviews1';

function HomePage() {
  return (
    <Box sx={{ padding: '0.2rem', width: '100%', backgroundColor: 'white' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextReveal text='JACKIE WYERS' />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1rem' }}>
            <RotatingText />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <QuiltedImageList />
        </Grid>
        <Banner1 />
        <Grid item xs={12}>
          <ExploreSiteSlider />
        </Grid>
        <Grid item xs={12}>
          <EmailSubscribe />
        </Grid>
        <Grid item xs={12}>
          <MeetJackieHero />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='LATEST TUTORIALS' />
          <Slider1 />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Quiz1 />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='PRODUCT REVIEWS' />
        </Grid>
        <Grid item xs={12}>
          <Reviews1 />
        </Grid>
        <Grid item xs={12}>
          <QuoteBanner3 />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='SHOP MY STYLE' />
        </Grid>
        <Grid item xs={12}>
          <ShopMyHero />
        </Grid>
        <Grid item xs={12}>
          <BeigeReveal text='BEYOND BEAUTY' />
          <VlogVideo />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
