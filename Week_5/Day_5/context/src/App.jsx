import React, { useState } from 'react';
import CounterContext from './CounterContext';
import CountButtons from './Buttons';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  return (
    <CounterContext.Provider value={{
        currentNumber, // Ici on utilise le « short property assignment » ;)
        increment: () => setCurrentNumber(currentNumber + 1),
        decrement: () => setCurrentNumber(currentNumber - 1)
    }}>
      {
      /* Le contenu de mon App */
      <>
        <h1>{currentNumber}</h1>
        <CountButtons />
      </>
      }
    </CounterContext.Provider>
  );
};

export default App;