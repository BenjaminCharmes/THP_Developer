import React, { useState, useEffect } from 'react';

function Hangman() {
  const [word, setWord] = useState([]);
  const [display, setDisplay] = useState([]);
  const [lives, setLives] = useState(6);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  useEffect(() => {
    async function fetchWord() {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      const data = await response.json();
      setWord(data[0]);
      console.log(data)
      setDisplay(Array(data[0].length).fill('_'));
    }

    fetchWord();
  }, []);

  useEffect(() => {
    if(display.join('') === word) {
      setGameStatus('won');
    } else if (lives === 0) {
      setGameStatus('lost');
    }
  }, [display, lives, word]);


  const handleGuess = (event) => {
    event.preventDefault();
    const letter = event.target.letter.value;
    event.target.letter.value = '';
    if (!guessedLetters.includes(letter)) {
      if (word.includes(letter)) {
        setDisplay(display.map((char, index) => {
          if (word[index] === letter) {
            return letter;
          }
          return char;
        }));
      } else {
        setLives((prevLives) => prevLives - 1);
      }
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  };

  return (
    <div>
      <div>
        <p>{display.join(' ')}</p>
        <p>Remaining lives: {lives}</p>
      </div>
      {gameStatus === 'playing' && (
        <form onSubmit={handleGuess}>
          <label>
            Propose a letter :
            <input type="text" name="letter" maxLength={1} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      {gameStatus === 'won' && <p>Congratulations! You have found the word {word}</p>}
      {gameStatus === 'lost' && <p>Too bad, you lost. The word was {word}</p>}
    </div>
  );
}

export default Hangman;
