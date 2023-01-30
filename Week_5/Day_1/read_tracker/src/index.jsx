import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './components/Books/Books.jsx'

const App = () => (
  <>
    <h1 className="text-center">List of Books</h1>
    <div className="row">
      <Books />
    </div>
  </>
);

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App tab="home" />);
