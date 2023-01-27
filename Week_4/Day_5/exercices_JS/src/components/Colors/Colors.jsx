import React from 'react';
import { useState } from 'react';

const Colors = () => {
  let [lastColor, setColor] = useState('Red');

  const setLastColor = (color) => {
    setColor(color);
  }

  return (
    <div className="Colors">
      <div style={{backgroundColor: 'red', width: '50px', height: '50px'}} onClick={() => setLastColor('red')}></div> <br />
      <div style={{backgroundColor: 'green', width: '50px', height: '50px'}} onClick={() => setLastColor('green')}></div> <br />
      <div style={{backgroundColor: 'blue', width: '50px', height: '50px'}} onClick={() => setLastColor('blue')}></div> <br />
      <div style={{backgroundColor: 'yellow', width: '50px', height: '50px'}} onClick={() => setLastColor('yellow')}></div> <br />
      <p>The last color clicked is {lastColor}</p>
    </div>
  );
};

export default Colors;
