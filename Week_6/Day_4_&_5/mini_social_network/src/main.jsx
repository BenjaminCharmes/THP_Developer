import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import './styles/style.scss';

const Main = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Main tab="home" />);
