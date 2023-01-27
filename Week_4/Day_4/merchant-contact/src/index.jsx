import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from './components/Customers/Customers'

const App = () => (
  <>
    <h1 className="text-center">Here is a list of all your clients</h1>
    <div className="row">
      <Customers />
    </div>
  </>
);

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App tab="home" />);