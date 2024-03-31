import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Tyler1() {
  return (
    <>
      <Autocomplete
        width="100%"
        disablePortal
        id="combo-box-demo"
        options={popularVideos} // Ensure that 'popularVideos' is defined and imported into this file
        sx={{ alignItems: 'center', backgroundColor: 'white', width: '100%', color: 'white' }}
        renderInput={(params) => <TextField {...params} label="Search" sx={{ width : '100%', backgroundColor: 'white' }} />}
      />
    
    </>
  );
}


  
 
  const popularVideos = [
    { label: 'NO HEAT HAIRSTYLES! 4 Unique Messy Buns', year: '' },
    { label: 'Rose from "Titanic" Hairstyles | Elegant Curls & Updo\'s', year: '' },
    { label: 'the cw RIVERDALE Hairstyles | Cheryl Blossom, Betty Cooper, Veronica Lodge & Josie', year: '' },
    { label: 'ICONIC 60s makeup', year: '' },
    { label: 'Get Ready With Me Prom 2013 - Makeup & Hair with Gold Dress & Pink Heels!', year: '' },
    { label: 'Get Ready With Me for Prom 2014! Soft & Girly Silver and Pink Makeup', year: '' },
    { label: 'My 5 Minute Perky High Ponytail vintage hairstyles', year: '' },
    { label: 'Barbie Makeup & Costume Idea! Halloween 2014', year: '' },
    { label: 'Lydia Martin from mtv TEEN WOLF Braided Hairstyles | Holland Roden', year: '' },
    { label: 'allie hamilton "the notebook" vintage hairstyles | 40\'s', year: '' },
    { label: 'Rose From "Titanic" Makeup 🌹 | Kate Winslet Titanic', year: '' },
    { label: 'Quick HEATLESS Hairstyles for Fall🍂Boho Hair', year: '' },
    { label: 'Alison DiLaurentis Makeup, Hair & Outfit from Pretty Little Liars!', year: '' },
    { label: 'Bella Cullen (Kristen Stewart) Vampire Makeup | Breaking Dawn Transformation', year: '' },
    { label: 'Elsa from Frozen Inspired Hair, Makeup & Dress! Get Ready With Me for Winter Formal', year: '' },
    { label: 'Greek Goddess Makeup, Hair & Prom Dress! GRWM 2015', year: '' },
    { label: 'Ariana Grande Hairstyles | Easy & Fast Back To School Looks', year: '' },
    { label: 'Emma Watson\'s Belle Makeup & Hair  Beauty & The Beast', year: '' },
    { label: 'Recreating ICONIC Audrey Hepburn Hairstyles | 60\'s Hair', year: '' },
    { label: 'KENDALL JENNER Makeup | Kendall x Kylie Cosmetics Review', year: '' },
    { label: 'Perfect MESSY BUN! 60 second hair', year: '' },
    { label: 'Aquamarine Makeup, Hair, Dress & Mermaid Tail!', year: '' },
    { label: 'Grow Your Hair Longer and Faster! Natural Tips for Healthy Hair', year: '' },
    { label: 'Bella Swan Everyday "No-Makeup Makeup" & Soft Curls | Twilight', year: '' },
    { label: 'No-Makeup Makeup! Brooke Shields | The Blue Lagoon Beach Hair & Makeup', year: '' },
    { label: '3 daphne "BRIDGERTON" hairstyles🐝 modern regency hair', year: '' },
    { label: 'Brigitte Bardot Big Hair & Makeup Feat. Garnier Full & Plush Products!', year: '' },
    { label: 'ARIANA GRANDE Makeup 2016! New Bangs & Full Glam Look', year: '' },
    { label: 'the cw RIVERDALE Cheryl Blossom Makeup Hair & Outfits ', year: '' },
    { label: 'Recreating ICONIC Effy Stonem SKINS Makeup Look! effy stonem makeup', year: '' },
    { label: 'jackie "that 70s show" makeup hair & outfits | 70s makeup', year: '' },
    { label: 'Emma Watson\'s Belle Hairstyles | Beauty & The Beast', year: '' },
    { label: 'Cinderella "Messy Maiden" Hairstyles | Lily James\' Braids', year: '' },
    { label: '90s HAIRSTYLES trending in 2020🦋Claw Clip Hairstyles & Butterfly Clips', year: '' },
    { label: 'My Skin Care Routine | Get Even & Smooth Skin | JackiesBeautyBasics', year: '' },
    { label: 'Blank Space Cover / Taylor Swift #SingAndStyle', year: '' },
    { label: 'How To Become A Mermaid | Water Proof/Sweat Proof Makeup', year: '' },
    { label: '60s makeup & hair with REAL VINTAGE makeup!', year: '' },
  
    
];