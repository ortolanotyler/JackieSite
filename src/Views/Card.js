import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card
        imgSrc="https://unsplash.it/370/235/?random"
        day="1"
        month="Jan"
        title="Lorem Ipsum"
        subtitle="dolor sit amet, consectetur adipiscing elit"
        description="In ut quam quis magna pulvinar tempor at non elit. Ut lacinia elit vestibulum nulla accumsan, et fringilla mi accumsan. Etiam urna justo, luctus non porta eget, interdum quis tellus."
        time="33 min"
        commentsUrl="#"
        commentsCount="1"
      />
      {/* More Card components */}
    </div>
  );
};

export default App;
