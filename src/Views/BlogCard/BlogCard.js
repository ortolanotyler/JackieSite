import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCard.css';


const BlogCard = ({ 
  contentName, 
  contentTitle, 
  contentDescription, 
  imageSrc, 
  path,
  link1, 
  link2, 
  link1Text, 
  link2Text 
}) => {
  let navigate = useNavigate();

  const exploreBlog = () => {
      navigate(path);
  };

  return (
      <section className="container">
          <div id="card">
              <figure className="front">
                  <div className="left-div">
                      <p className="content-name">{contentName}</p>
                      <p className="content-title">{contentTitle}</p>
                      <p className="content-description">{contentDescription}</p>
                      <section id="explore">
                          <p>
                              <a href={path} onClick={(e) => {
                                  e.preventDefault();
                                  exploreBlog();
                              }}>Read</a>
                          </p>
                      </section>
                  </div>
                  {imageSrc && (
                      <div className="right-div">
                          <img src={imageSrc} alt="Blog Highlight" style={{ maxWidth: '100%', height: 'auto' }} />
                          <div className="links">
                              <a href={link1}>{link1Text}</a>
                              <a href={link2}>{link2Text}</a>
                          </div>
                      </div>
                  )}
              </figure>
          </div>
      </section>
  );
};

export default BlogCard;
