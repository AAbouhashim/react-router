import React, { useEffect } from 'react';

const Red = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'red';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="red">
      <h1>Red</h1>
    </div>
  );
};

export default Red;
