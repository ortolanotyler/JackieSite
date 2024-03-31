import React, { useState } from 'react';
import './FanArtGallery.css'; // Assuming you move your SCSS into a separate file
import image1 from './FanArtImages/1.jpg';
import image2 from './FanArtImages/2.jpg';
import image3 from './FanArtImages/3.jpg';
import image4 from './FanArtImages/4.jpg';
import image5 from './FanArtImages/5.jpg';
import image6 from './FanArtImages/6.jpg';
import image7 from './FanArtImages/7.jpg';
import image8 from './FanArtImages/8.jpg';
import image9 from './FanArtImages/9.jpg';
import image10 from './FanArtImages/10.jpg';
import image11 from './FanArtImages/11.jpg';
import image12 from './FanArtImages/12.jpg';
import image13 from './FanArtImages/13.jpg';
import image14 from './FanArtImages/14.jpg';
import image15 from './FanArtImages/15.jpg';
import image16 from './FanArtImages/16.jpg';
import image17 from './FanArtImages/17.jpg';
import image18 from './FanArtImages/18.jpg';
import image19 from './FanArtImages/19.jpg';
import image20 from './FanArtImages/20.jpg';
import image21 from './FanArtImages/21.jpg';
import image22 from './FanArtImages/22.jpg';
import image23 from './FanArtImages/23.jpg';
import image24 from './FanArtImages/24.jpg';
import image25 from './FanArtImages/25.jpg';
import image26 from './FanArtImages/26.jpg';
import image27 from './FanArtImages/27.jpg';
import bench from './Images/bench.png';


const galleryImages = [
  {
    src: image27,
    alt: "Café Terrace at Night, 1888, Kröller-Müller Museum, Otterlo",
    caption: "@navasy",
  },
  {
    src: image26,
    alt: "Bedroom in Arles, 1888, Van Gogh Museum, Amsterdam",
    caption: "@navasy",
  },
  {
    src: image3,
    alt: "red lips",
    caption: "Artist: Suray @suray.art",
  },
  {
    src: image4,
    alt: "red headband",
    caption: "Artist: Sabine @‌Sabine.d.art",  },
  {
    src: image5,
    alt: "Art Process",
    caption: "Artist: Marina Joy   @marinajoycreations",
  },
  {
    src: image6,
    alt: "Black and White",
    caption: "Artist: Ali Hassaneim @‌alihassanein",
  },
  {
    src: image7,
    alt: "Half Photo Half Drawing",
    caption: "Artist: Zainab Ibrahim @‌x_artforever_x",
  },
  {
    src: image8,
    alt: "Blue Lagoon",
    caption: "Artist: Suray  @suray.art",
  },
  {
    src: image9,
    alt: "Colourful Background",
    caption: "Artist: Nira Afsana @‌jannatulafsananira",
  },
  {
    src: image10,
    alt: "Flower Braids",
    caption: "Artist: Miss Lepard @‌miss_lepard",
  },
  {
    src: image11,
    alt: "Butterfly",
    caption: "Artist: Faith Quinn @‌faithquinn.art",
  },
  {
    src: image12,
    alt: "Round",
    caption: "Artist: Vector Boy @‌hapyvector",
  },
  {
    src: image13,
    alt: "PURPLE PORTAIT",
    caption: "Artist: Noura Ozon @‌nouraozon.art",
  },
  {
    src: image14,
    alt: "CRAYON BARBIE",
    caption: "Artist: Annie Bray @‌array.art",
  },

  {
    src: image15,
    alt: "UPDO",
    caption: "@‌papiion.art",
  },
  {
    src: image16,
    alt: "Flower Crown",
    caption: "@‌the_.swan",
  },
  {
    src: image17,
    alt: "Beret",
    caption: "Artist: Surbhi Patel @‌art_arcade._",
  },
  {
    src: image18,
    alt: "ANGELIC",
    caption: "Artist: Nikki @‌seethrunikki",
  },
  {
    src: image19,
    alt: "BRAIDS AND CHERRY",
    caption: "Artist: Steph Recking @‌stephreckingart",
  },
  {
    src: image20,
    alt: "DIGITAL",
    caption: "Artist: Agata @‌agatikart",
  },
  {
    src: image21,
    alt: "PAINTERLY",
    caption: "Artist: Noa @‌surrealist_noa",
  },
  {
    src: image22,
    alt: "STRAWBERRY GIRL",
    caption: "Artist: LeeAnn Paquin @‌leeannpaquin",
  },
  {
    src: image23,
    alt: "LeeAnn Paquin - Floral Portrait",
    caption: "Artist: LeeAnn Paquin @‌leeannpaquin",
  },
  {
    src: image24,
    alt: "Spring Sketch",
    caption: "Artist: Amy Marchant @amy_marchant_art",
  },
  {
    src: image25,
    alt: "Coca Cola",
    caption: "Artist: Amy Marchant @amy_marchant_art",
  },
  {
    src: image2,
    alt: "Red Lips",
    caption: "Artist: Leonie @‌flying_drawings",
  },
  {
    src: image1,
    alt: "Bedroom in Arles, 1888, Van Gogh Museum, Amsterdam",
    caption: "Artist: Rita Pigaeva @rita.pigaeva",
  },
  // Add the rest of your images here...
];





const FanArt = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = galleryImages.length;

  const goPrev = () => {
    setActiveIndex((prevIndex) => prevIndex !== 0 ? prevIndex - 1 : count - 1);
  };

  const goNext = () => {
    setActiveIndex((prevIndex) => prevIndex < count - 1 ? prevIndex + 1 : 0);
  };

  return (
    <div id="gallery">
      <ul id="frame">
        {galleryImages.map((image, index) => (
          <li key={index} className={index === activeIndex ? 'active' : ''}>
            <figure>
              <img src={image.src} alt={image.alt} />
              <figcaption>
                <div className="caption-frame">
                  {image.caption}
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div id="bench-container">
        <div id="nav"> {/* Move navigation inside bench container */}
          <button className="prev" onClick={goPrev}>&#10094;</button>
          <button className="next" onClick={goNext}>&#10095;</button>
        </div>
        <img id="bench" src={bench} alt="cool bench" />
      </div>
    </div>
  );
};
export default FanArt;