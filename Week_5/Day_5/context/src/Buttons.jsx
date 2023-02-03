import { useContext } from 'react';
import CounterContext from './CounterContext';

const CountButtons = () => {
  const counter = useContext(CounterContext);

  return (
    <div className="CountButtons">
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
    </div>
  );
};

export default CountButtons;
