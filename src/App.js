import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import BarbieBlogPost from './BarbieBlogPost';
import LatteMakeupBlogPost from './LatteMakeupBlogPost';
import SugarPlumBlogPost from './SugarPlumBlogPost';
import HomePage from './Views/HomePage';
import About from './Views/About';
import articles from './TravelArticleList.js';

import MyStyle from './Views/MyStyle';
import Reviews from './Views/Reviews';
import Vlogs from './Vlogs.js';
import Confessions from './Views/Confessions';
import PopCultureView from './Views/PopCulture.js';
import CustomizedSteppers from './Stepper.js';
import FindYourStyleQuiz from './Views/findYourStyle.js';
import LanaBlogPost from './LanaBlog.js';
import PatMcGrathPost from './PatMcGrath.js';
import FanArt from './FanArtGallery';
import NewTutorials from './Views/NewTutorials.js';
import Footer from './Footer.js';
import SharonTatePost from './SharonTate.js';
import SophiaLorenPost from './SophiaLoren.js';
import VintageVibesMerch from './VintageVibesMerch.js';
import VictoriaSecret from './VictoriaSecret.js';
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component
import Trends from './TutorialsViews/Trends.js';
import VintageVibes from './TutorialsViews/VintageVibes.js';
import PopCulture from './TutorialsViews/PopCulture.js';
import Quiz1 from './Quiz1.js';
import ArmaniReview from './ArmaniReview.js';
import BalkeBlog from './BalkeBlog.js';
import Disney1Post from './Disney1.js';
import Disney2Post from './Disney2.js';
import BonBonReview from './PerfumesReviews/BonBonReview.js';
import HalfetiReview from './PerfumesReviews/HalfetiReview.js';
import JickyReview from './PerfumesReviews/JickyReview.js';
import TravelArticleList from './TravelArticleList.js';
import Slider2 from './Views/bbb.js';
import SharonIconicPost from './SharonIconicPost.js';
import TravelGrid from './TravelGrid.js';



function App() {
  return (
    
      <div className="App">
        <Router>
          <ScrollToTop/>
          <ResponsiveAppBar />
         
          <Routes>
          <Route path="/steppers" element={<CustomizedSteppers />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/findYourStyle" element={<FindYourStyleQuiz />} />
            <Route path="/myStyle" element={<MyStyle />} />
            <Route path="/vlogs" element={<Vlogs />} />
            <Route path="/tutorials" element={<NewTutorials />} />
            <Route path="/reviews" element={<Reviews />} />

            {/*REVIEW POST ROUTES*/}



            <Route path="/confessions" element={<Confessions />} />



            <Route path="/vintagevibesmerch" element={<VintageVibesMerch/>} />
            <Route path="/hottest-trends" element={<Slider2 />} />
            <Route path="/pop-culture" element={<PopCultureView />} />
            <Route path="/timetraveltutorials" element={<VintageVibes/>} />

            
            
             {/* BLOG POST ROUTES */}
            <Route path="/barbie" element={<BarbieBlogPost />} /> 
            <Route path="/latteMakeup" element={<LatteMakeupBlogPost />} /> 
            <Route path="/sugarPlum" element={<SugarPlumBlogPost />} />
            <Route path="/sharontate" element={<SharonTatePost />} />
            <Route path="/sugarplumfairy" element={<SugarPlumBlogPost />} />
            <Route path="/lanablog" element={<LanaBlogPost />} />
            <Route path="/patmcgrath" element={<PatMcGrathPost />} />
            <Route path='/sophialoren' element={<SophiaLorenPost />} />
            <Route path='/VictoriaSecret' element={<VictoriaSecret />} />
            <Route path='/balkeblog' element={<BalkeBlog />} />
            <Route path="/quiz" element={<Quiz1 />} />
            <Route path='/iconicsharon' element={<SharonIconicPost />} />

             {/* REVIEW ROUTES */}

            <Route path='/armanireview' element={<ArmaniReview />} />
            <Route path='/bonbonreview' element={<BonBonReview />} />
            <Route path='/halfetireview' element={<HalfetiReview />} />
            <Route path='/jickyreview' element={<JickyReview />} />


             {/* Travel ROUTES */}
            <Route path="/travel" element={<TravelArticleList articles={articles} />} />
             <Route path="/disneyreview1" element={<Disney1Post />} />
             <Route path="/disneyreview2" element={<Disney2Post />} />


         {/* BRAINSTORMING */}  
            <Route path="/FanArt" element={<FanArt />} />
            <Route path="/a" element={<TravelArticleList articles={articles} />} />
            <Route path="/b" element={<TravelGrid />} />




            <Route path="/trends" element={<Trends />} />
            <Route path="/vintagevibes" element={<VintageVibes />} />
            <Route path="/popculture" element={<PopCulture />} />
            <Route path="/quiz" element={<Quiz1 />} />




          </Routes>
          <Footer/>
        </Router>
      </div>
 
  );
}

export default App;
