import React, { useEffect } from 'react';

const Blue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'blue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="blue">
      <h1>Blue</h1>
    </div>
  );
};

export default Blue;
