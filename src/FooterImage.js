import React, { useState } from 'react';
import './Footer.css';

const FooterImage = () => {
  const [selectedImage, setSelectedImage] = useState('Monstera');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <fieldset>
      <label style={{ backgroundImage: "url(https://assets.codepen.io/2585/fiddle-leaf.jpeg)" }}>
        <input type="radio" name="images" value="Fiddle Leaf" checked={selectedImage === 'Fiddle Leaf'} onChange={handleImageChange} />
      </label>
      <label style={{ backgroundImage: "url(https://assets.codepen.io/2585/fiddle-leaf.jpeg)" }}>
        <input type="radio" name="images" value="Fiddle Leaf" checked={selectedImage === 'Fiddle Leaf'} onChange={handleImageChange} />
      </label>      <label style={{ backgroundImage: "url(https://assets.codepen.io/2585/fiddle-leaf.jpeg)" }}>
        <input type="radio" name="images" value="Fiddle Leaf" checked={selectedImage === 'Fiddle Leaf'} onChange={handleImageChange} />
      </label>      <label style={{ backgroundImage: "url(https://assets.codepen.io/2585/fiddle-leaf.jpeg)" }}>
        <input type="radio" name="images" value="Fiddle Leaf" checked={selectedImage === 'Fiddle Leaf'} onChange={handleImageChange} />
      </label>
    </fieldset>
  );
};

export default FooterImage;