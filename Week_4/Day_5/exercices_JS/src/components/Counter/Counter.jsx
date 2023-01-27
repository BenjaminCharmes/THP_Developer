import React from 'react';
import { useState } from 'react';
import BigNumber from '../BigNumber/BigNumber'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  console.log('count', count)

  return (
    <div className="Counter">
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <BigNumber data={count} />
    </div>
  );

};

export default Counter;
