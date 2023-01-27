import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from './components/Colors/Colors'
import Counter from './components/Counter/Counter'

const App = () => (
  <>
    <h1 className="text-center">Colors</h1>
    <Colors />
    <Counter />
  </>
);

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App tab="home" />);
