import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
import './Quiz1.css';
const Quiz1 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 });
  const [showResults, setShowResults] = useState(false); // Define showResults state here

  const quizQuestions = [
    {
      question: "You're having a movie night, what are you watching?",
      options: [
        { text: "🌊 Aquamarine", value: "3" },
        { text: "📖 Pride and Prejudice", value: "4" },
        { text: "👭 Sisterhood of the Traveling Pants", value: "2" },
        { text: "💅 The Clique", value: "6" },
        { text: "💔 John Tucker Must Die", value: "1" },
        { text: "☕ Breakfast at Tiffany's", value: "5" },
      ],
    },
    {
      question: "Which TV Show Universe Could You Fit Into?",
      options: [
        { text: "🌊 H2O: Just Add Water", value: "3" },
        { text: "🏰 Bridgerton", value: "4" },
        { text: "🍂 Looking for Alaska", value: "2" },
        { text: "🗽 Gossip Girl", value: "6" },
        { text: "🎉 Euphoria", value: "1" },
        { text: "🕵️‍♀️ Riverdale", value: "5" },
      ],
    },
    {
      question: "Disney Channel's Closet Raid!",
      options: [
        { text: "🎤 Miley Stewart", value: "3" },
        { text: "🌟 Raven Baxter", value: "4" },
        { text: "🛍 Lizzie McGuire", value: "2" },
        { text: "💎 London Tipton", value: "6" },
        { text: "🧙‍♀️ Alex Russo", value: "1" },
        { text: "🎸 Hannah Montana", value: "5" },
      ],
    },
    {
      question: "Taylor Swift Era Soulmate?",
      options: [
        { text: "👢 Debut Days", value: "3" },
        { text: "🌱 Folklore Feels", value: "4" },
        { text: "🧣 Red Romance", value: "2" },
        { text: "🏙 1989 Vibes", value: "6" },
        { text: "🖤 Reputation Rebel", value: "1" },
        { text: "🍂 Evermore Essence", value: "5" },
      ],
    },
    {
      question: "Dream State to Call Home?",
      options: [
        { text: "🏝 Hawaii", value: "3" },
        { text: "🍁 Connecticut", value: "4" },
        { text: "🌞 Florida", value: "2" },
        { text: "🍎 NYC", value: "6" },
        { text: "🎰 Las Vegas", value: "1" },
        { text: "🌉 California", value: "5" },
      ],
    },
    {
      question: "Your Dream House Awaits:",
      options: [
        { text: "🏖 Beach House", value: "3" },
        { text: "🌾 Farmhouse", value: "4" },
        { text: "🏡 Cozy Nest", value: "2" },
        { text: "🇬🇧 London Flat", value: "6" },
        { text: "🏙 NYC Loft", value: "1" },
        { text: "🎨 Eclectic Grandma Chic", value: "5" },
      ],
    },
    {
      question: "Sunday Funday?",
      options: [
        { text: "🏊‍♀️ Dive In", value: "3" },
        { text: "📚 Get Lost in a Book", value: "4" },
        { text: "🍰 Baking Bliss", value: "2" },
        { text: "🛍 Retail Therapy", value: "6" },
        { text: "🎉 Club Hopping", value: "1" },
        { text: "💌 Scrapbooking", value: "5" },
      ],
    },
    {
      question: "Color Palette Crush:",
      options: [
        { text: "🌊 Sea-Inspired", value: "3" },
        { text: "🍂 Earthy Tones", value: "4" },
        { text: "🌈 '70s Splash", value: "2" },
        { text: "🎨 Pastel Dreams", value: "6" },
        { text: "🖤 Dark & Moody", value: "1" },
        { text: "👗 Vintage Chic", value: "5" },
      ],
    },
    // Additional categories and their questions follow the same structure
  ];
  

  const handleAnswerClick = (value) => {
    // Update scores based on answer clicked
    const updatedScores = { ...scores, [value]: scores[value] + 1 };
    setScores(updatedScores);

    // Check if it's the last question
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true); // Show results if it's the last question
      finishQuiz(updatedScores); // Determine the quiz outcome based on scores
    }
  };

  const finishQuiz = (finalScores) => {
    // Calculate the category with the highest score
    let maxScoreCategory = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);

    // Redirect to the appropriate page based on the highest score
    switch (maxScoreCategory) {
      case '1': navigate('/rebellious'); break;
      case '2': navigate('/girlNextDoor'); break;
      case '3': navigate('/littleMermaid'); break;
      case '4': navigate('/enchantingBeauty'); break;
      case '5': navigate('/vintageGirl'); break;
      case '6': navigate('/poshPreppy'); break;
      default: navigate('/'); // Redirect to home page or a default page if personality type is undetermined
    }
  };

  return (
    <div className="quiz-container">
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
        backgroundImage: `url(${option.backgroundImage})`,
        backgroundSize: 'cover',
        color: 'white' // Adjust text color as needed
      }}
      onClick={() => handleAnswerClick(option.value)}
    >
      {option.text}
    </button>
  ))}
</div>

          </div>
   
      ) : (
        <div className="results-section">
          <h2>Quiz Completed!</h2>
          {/* Additional logic to display summary of results can be added here */}
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      )}
    </div>
  );
};

export default Quiz1;
