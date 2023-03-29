// React router
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'

// Hooks
import { useState } from 'react';

//Components
import Footer from "./components/Footer/Footer";
import AchievementPopUp from './components/AchievementPopUp/AchievementPopUp';

//Pages
import Home from "./pages/Home/Home";
import Admin from './pages/Admin/Admin';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import Door from "./pages/Door/Door";
import DiscoverMap from "./pages/Maps/DiscoverMap/DiscoverMap";
import Parameters from "./pages/Parameters/Parameters";
import Enigma1 from "./pages/Enigmas/Enigma1/Enigma1";
import Enigma2 from "./pages/Enigmas/Enigma2/Enigma2";

//SCSS
import './styles/main.scss'

//PrivateRoutes
import PrivateRoutes from './utils/PrivateRoutes';

function App() {

  const [achievementUnlocked, setAchievementUnlocked] = useState(false);
  const [achievementTitle, setAchievementTitle] = useState('');

  const handleUnlockSuccess = () => {
    setAchievementUnlocked(true);
  };

  const handleAchievementTitle = (title) => {
    setAchievementTitle(title);
  };

  return (
      <div className='App'>
        <Router>
          <main>
              {achievementUnlocked && <AchievementPopUp 
                text={achievementTitle} 
                onClose={() => setAchievementUnlocked(false)} 
                />}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/découverte" element={<DiscoverMap />} />
                <Route path='/porte' element={<Door onUnlockSuccess={handleUnlockSuccess} onAchievementTitle={handleAchievementTitle} />} />
                <Route path="/connexion" element={<Login />} />
                <Route path="/inscription" element={<Register />} />
                <Route element={<PrivateRoutes />}>
                    <Route key="admin" path="/admin" element={<Admin />} />
                    <Route key="profil" path="/profil/:id" element={<Profile />} />
                    <Route key="profil/editer" path="/profil/:id/editer" element={<EditProfile />} />
                    <Route key="paramètres" path="/paramètres" element={<Parameters/>} />
                    <Route key="enigme/1" path="/enigme/1" element={<Enigma1 onUnlockSuccess={handleUnlockSuccess} onAchievementTitle={handleAchievementTitle} />} />
                    <Route key="enigme/2" path="/enigme/2" element={<Enigma2 />} />
                </Route>
              </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
  )
}

export default App;
