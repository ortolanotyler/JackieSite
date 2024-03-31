import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css';

// Import images
import aquamarineImage from './Images/Aqua.png';
import prideAndPrejudiceImage from './Images/Pride.png';
import sisterhoodImage from './Images/Sister.png';
import theCliqueImage from './Images/Clique.png';
import johnTuckerMustDieImage from './Images/JohnTucker.png';
import breakfastAtTiffanysImage from './Images/Breakfast.png';
// Assume similar imports for other options...

//question2 images 
import h2Oimage from './Images/h2O.png';
import bridgerton from './Images/bridgerton.png';
import alaska from './Images/alaska.png';
import gossip from './Images/gossip.png';
import euphoria from './Images/euphoria.png';
import riverdale from './Images/riverdale.png';


//question4 images
import debut from './Images/debut.png';
import folklore from './Images/folklore.png';
import red from './Images/red.png';
import nineteen from './Images/nineteen.png';
import reputation from './Images/reputation.png';
import fearless   from './Images/fearless.png';

//question5 images
import hawaii from './Images/hawaii.png';
import connecticut from './Images/connecticut.png';
import florida from './Images/florida.png';
import nyc from './Images/nyc.png';
import vegas from './Images/vegas.png';
import california from './Images/california.png';

//question6 images
import beach from './Images/beach.png';
import farmhouse from './Images/farmhouse.png';
import cozy from './Images/cozy.png';
import londonFlat from './Images/londonFlat.png';
import nycLoft from './Images/nycLoft.png';
import eclectic from './Images/eclectic.png';

//question7 images
import dive from './Images/dive.png'; 
import book from './Images/book.png';
import baking from './Images/baking.png';
import retail from './Images/retail.png';
import club from './Images/club.png';
import scrapbooking from './Images/scrapbooking.png';

//question8 images
import sea from './Images/sea.png';
import earthy from './Images/earthy.png';
import seventies from './Images/seventies.png';
import oldmoney from './Images/oldmoney.png';
import dark from './Images/dark.png';
import vintage from './Images/vintage.png';

//question9 images
import pearly from './Images/pearly.png';
import pasteltips from './Images/pasteltips.png';
import french from './Images/french.png';
import pink from './Images/pink.png';
import cherry from './Images/cherry.png';
import black from './Images/black.png';

//question10 images
import rose from './Images/rose.png';
import balm from './Images/balm.png';
import compact from './Images/compact.png';
import dior from './Images/dior.png';
import bronzer from './Images/bronzer.png';
import blackeye from './Images/blackeye.png';

//question11 images
import chanel from './Images/chanel.png';
import beachbag from './Images/beachbag.png';
import chilltote from './Images/chilltote.png';
import itgirlbag from './Images/itgirlbag.png';
import floral from './Images/floral.png';
import custom from './Images/custom.png';









const Quiz1 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 });
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "You're having a movie night, what are you watching?",
      options: [
        { text: "🌊 Aquamarine", value: "3", backgroundImage: aquamarineImage },
        { text: "📖 Pride and Prejudice", value: "4", backgroundImage: prideAndPrejudiceImage },
        { text: "👭 Sisterhood of the Traveling Pants", value: "2", backgroundImage: sisterhoodImage },
        { text: "💅 The Clique", value: "6", backgroundImage: theCliqueImage },
        { text: "💔 John Tucker Must Die", value: "1", backgroundImage: johnTuckerMustDieImage },
        { text: "☕ Breakfast at Tiffany's", value: "5", backgroundImage: breakfastAtTiffanysImage },
      ],
    },
    {
      question: "Which TV Show Universe Could You Fit Into?",
      options: [
        { text: "🌊 H2O: Just Add Water", value: "3", backgroundImage: h2Oimage },
        { text: "🏰 Bridgerton", value: "4", backgroundImage: bridgerton },
        { text: "🍂 Looking for Alaska", value: "2" , backgroundImage: alaska},
        { text: "🗽 Gossip Girl", value: "6", backgroundImage: gossip },
        { text: "🎉 Euphoria", value: "1", backgroundImage: euphoria },
        { text: "🕵️‍♀️ Riverdale", value: "5" , backgroundImage: riverdale},
      ],
    },
    {
      question: "Taylor Swift Era Soulmate?",
      options: [
        { text: "👢 Debut Days", value: "3", backgroundImage: debut },
        { text: "🌱 Folklore Feels", value: "4", backgroundImage: folklore },
        { text: "🧣 Red Romance", value: "2", backgroundImage: red },
        { text: "🏙 1989 Vibes", value: "6" , backgroundImage: nineteen},
        { text: "🖤 Reputation Rebel", value: "1" , backgroundImage: reputation},
        { text: "🍂 Fearless Fantasy", value: "5" , backgroundImage: fearless },
      ],
    },
    {
      question: "Dream State to Call Home?",
      options: [
        { text: "🍎 New York (Manhattan)", value: "6", backgroundImage: nyc },
        { text: "California (San Diego)", value: "5", backgroundImage: california },
        { text: "🌞 Florida (Key West)", value: "2", backgroundImage: florida },
        { text: "🎰 Nevada (Las Vegas)", value: "1" , backgroundImage: vegas},
        { text: "🍁 Connecticut (Hartford)", value: "4" , backgroundImage: connecticut},
        { text: "🏝 Hawaii (Maui)", value: "3", backgroundImage: hawaii },
      ],
    },
    {
      question: "Your Dream House Awaits:",
      options: [
        { text: "🏖 Beach House", value: "3" , backgroundImage: beach},
        { text: "🌾 Farmhouse", value: "4" , backgroundImage: farmhouse},
        { text: "🏡 Cozy Nest", value: "2" , backgroundImage: cozy},
        { text: "🇬🇧 London Flat", value: "6" , backgroundImage: londonFlat},
        { text: "🏙 NYC Loft", value: "1" , backgroundImage: nycLoft},
        { text: "🎨 Eclectic Grandma Chic", value: "5", backgroundImage: eclectic },
      ],
    },
    {
      question: "Sunday Funday?",
      options: [
        { text: "🏊‍♀️ Dive In", value: "3" , backgroundImage: dive},
        { text: "📚 Get Lost in a Book", value: "4" , backgroundImage: book},
        { text: "🍰 Baking Bliss", value: "2", backgroundImage: baking },
        { text: "🛍 Retail Therapy", value: "6" , backgroundImage: retail},
        { text: "🎉 Club Hopping", value: "1", backgroundImage: club },
        { text: "💌 Scrapbooking", value: "5", backgroundImage: scrapbooking },
      ],
    },
    {
      question: "Color Palette Crush:",
      options: [
        { text: "🌊 Sea-Inspired", value: "3", backgroundImage: sea },
        { text: "🍂 Earthy Tones", value: "4" , backgroundImage: earthy},
        { text: "🌈 '70s Splash", value: "2", backgroundImage: seventies },
        { text: "💰 Old Money", value: "6", backgroundImage: oldmoney},
        { text: "🖤 Dark & Moody", value: "1" , backgroundImage: dark},
        { text: "👗 Vintage Chic", value: "5", backgroundImage: vintage },
      ],
    },
    {
      question: "Nail Game Strong:",
      options: [
        { text: "🐚 Pearly Nails", value: "3", backgroundImage: pearly },
        { text: "🌷 Pastel Tips", value: "4" , backgroundImage: pasteltips},
        { text: "🇫🇷 Trendy French", value: "6", backgroundImage: french },
        { text: "🌸 Pink Cuteness" , value: "2", backgroundImage: pink },
        { text: "🍒Pop Of Cherry", value: "5" , backgroundImage: cherry},
        { text: "⚫ Black Only!", value: "1", backgroundImage: black },
      ],
    },
    {
      question: "Your Makeup Must-Have Is ... :",
      options: [
        { text: "🌹 Rose Blush", value: "4", backgroundImage: rose },
        { text: "💧 Lip Balm", value: "2" , backgroundImage: balm},
        { text: "🎀 Vintage Compact", value: "5", backgroundImage: compact },
        { text: "✨ Dior Gloss", value: "6", backgroundImage: dior},
        { text: "🌞 Bronzer", value: "3" , backgroundImage: bronzer},
        { text: "🖤 Black Eyeliner ", value: "1", backgroundImage: blackeye },
      ],
    },
    {
      question: "Grab Your Purse, Let's Go! ",
      options: [
        { text: "🎀 CHANEL Boy Bag", value: "5", backgroundImage: chanel },
        { text: "🏖 Beaded Beach Bag", value: "3" , backgroundImage: beachbag},
        { text: "🤍 A Chill Tote", value: "2", backgroundImage: chilltote },
        { text: "🛍 The Latest IT Girl Bag!", value: "6", backgroundImage: itgirlbag},
        { text: "🧚‍♀️ Quilted, Floral Purse", value: "4" , backgroundImage: floral},
        { text: "🔥 A Custom Creation ", value: "1", backgroundImage: custom },
      ],
    },
    // Additional categories and their questions follow the same structure
  ];
  
  const handleAnswerClick = (value) => {
    const updatedScores = { ...scores, [value]: scores[value] + 1 };
    setScores(updatedScores);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      finishQuiz(updatedScores);
    }
  };

  const finishQuiz = (finalScores) => {
    const maxScoreCategory = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);

    switch (maxScoreCategory) {
      case '1': navigate('/rebellious'); break;
      case '2': navigate('/girlNextDoor'); break;
      case '3': navigate('/littleMermaid'); break;
      case '4': navigate('/enchantingBeauty'); break;
      case '5': navigate('/vintageGirl'); break;
      case '6': navigate('/poshPreppy'); break;
      default: navigate('/');
    }
  };

  return (
    <div style={{    fontFamily: 'GFS Didot, serif'}} className="quiz-container">
      {!showResults ? (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
  {quizQuestions[currentQuestionIndex].options.map((option, index) => (
    <button
      key={index}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${option.backgroundImage})`
      }}
      onClick={() => handleAnswerClick(option.value)}
    >
      {option.text}
    </button>
  ))}
</div>

        </>
      ) : (
        <div className="results-section">
          <h2>Quiz Completed!</h2>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      )}
    </div>
  );
};

export default Quiz1;
