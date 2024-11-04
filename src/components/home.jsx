import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'green';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
