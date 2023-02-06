import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import NavbarWorks from './components/StudyCase/StudyCase';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value ={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <NavbarHeader />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:worksCat" element={<NavbarWorks />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
