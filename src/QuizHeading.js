import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 350px;
  padding: 30px;
  background: #1abc9c;
  margin: auto;
  transition: .3s ease;
  box-shadow: 0 1px 1px rgba(0,0,0,.3);
  &:hover {
    box-shadow: 0 5px 20px rgba(0,0,0,.8);
    transform: translateY(-10px) scale(1.02);
  }
`;

const EntryTitle = styled.div`
  background: linear-gradient(to right, rgba(255,255,255,0) 50%, rgba(22, 160, 133,1.0) 50%);
  background-size: 200%;
  background-position: 0 0;
  display: inline;
  transition: .5s ease-in-out;
  font-family: raleway, arial, sans-serif;
  text-transform: uppercase;
  a {
    color: white;
    text-decoration: none;
  }
`;

const SmallText = styled.small`
  margin-top: 20px;
  display: block;
  font-family: raleway, arial, sans-serif;
  color: white;
  text-transform: uppercase;
  a {
    font-weight: 700;
    color: white;
    text-decoration: none;
  }
`;

const SpanText = styled.span`
  display: block;
  margin-top: 10px;
  font-family: raleway, arial, sans-serif;
  font-weight: 700;
  color: #16a085;
  a {
    color: white;
  }
`;

const Advertisement = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  width: 200px;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  p {
    margin: 0 0 15px;
    line-height: 1.4;
    color: #333;
  }
  a {
    background-color: #ff4757;
    color: white;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 3px;
    text-decoration: none;
    font-size: 14px;
  }
`;

const QuizHeading = () => {
  return (
    <Card>
      <EntryTitle>
        <a href="http://www.ariona.net">This text will be highlighted when hovered <br/> Inspired by webdesignerdepot new design</a>
      </EntryTitle>
      <SmallText>By <a href="http://www.ariona.net">Ariona Rian</a></SmallText>
      
      <SpanText>See details for walkthrough</SpanText>
      <SpanText>See Also: <a href="https://codepen.io/ariona/pen/JopOOr" target="_blank">3D hove plane effect</a></SpanText>
      
      <Advertisement>
        <p>Need PSD to HTML & CSS service?</p>
        <a href="https://www.fiverr.com/share/vLevr" target="_blank">Start from <strong>$50</strong></a>
      </Advertisement>
    </Card>
  );
};

export default QuizHeading;

