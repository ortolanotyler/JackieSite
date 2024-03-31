import React from 'react';
import './QuoteBanner2.css'; // Importing the CSS file for the quote banner
import PageLines from '../PageBreakUpLines';

const QuoteBanner = () => {
  return (
    <div className="quote-banner">
      <PageLines/>
      <blockquote>
        “DARE TO EXPERIMENT AND DESIGN DIFFERENT VERSIONS OF YOU”
      </blockquote>
      <cite>— Jackie Wyers</cite>
    </div>
  );
};

export default QuoteBanner;
