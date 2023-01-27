import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form/Form'
import Meal from './components/Meal/Meal'
import HangmanGame from './components/Hangman/Hangman'

const App = () => (
  <div>
    <div>
      <h1 className="text-center">Exercice: Form</h1>
      <Form />
    </div>
    <br /><hr /><br />
    <div>
      <h1 className="text-center">Exercice: Meal</h1>
      <Meal />
    </div>
    <br /><hr /><br />
    <div>
      <h1 className="text-center">Exercice: HangmanGame</h1>
      <HangmanGame />
    </div>
  </div>
);

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App tab="home" />);