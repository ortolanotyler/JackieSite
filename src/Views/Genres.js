import React from 'react';
import Tutorial from './viewComponents/Tutorial';

const genreData = [
  { title: 'Newest Post', description: 'Title for newest post (link)' },
  { title: 'Hottest Trends', description: 'My takes on todays vibes' },
  { title: 'Vintage Vibes', description: 'featuring Time Travel tutorials!' },
  { title: 'Pop Culture Obsessed', description: 'She doesnt even go here' },
  // Add more genres as needed
];

const Genres = () => {
  return (
    <div style={{
      padding: '50px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '20px',
      maxWidth: '800px',
      margin: 'auto'
    }}>
      {genreData.map((genre, index) => (
        <Tutorial
          key={index} // Consider using a unique ID instead of index if possible
          title={genre.title}
          description={genre.description}
          img={genre.img} // You can add genre-specific images if needed
        />
      ))}
    </div>
  );
};

export default Genres;
