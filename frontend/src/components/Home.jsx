import React from 'react';
import Quote from './Quote';


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>Kérlek, jelentkezz be</h3>
      <Quote className="quote" />
    </div>
  );
}

export default Home;