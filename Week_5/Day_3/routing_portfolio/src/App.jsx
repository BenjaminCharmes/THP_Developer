import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Works from './pages/Works/Works';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import NavbarWorks from './components/NavbarWorks';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:worksCat" element={<NavbarWorks />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
