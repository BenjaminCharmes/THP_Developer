import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register'
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <NavbarHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
