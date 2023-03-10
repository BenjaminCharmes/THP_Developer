function App() {

  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    let auth_token = Cookies.get('auth_token');
    let cookieExist = auth_token !== undefined && auth_token !== null;
    if (cookieExist && user.logged === false) {
      let data = "Bearer " + auth_token;
      authAPI.loginWithToken(data, setUser);
    }
  }, [user.logged]);

  function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  function ProtectedRoute({ children }) {
    if (user.logged === false) {
      return <Navigate to="/sign_in" />;
    };

    return children;
  } 

  
  
  return (
    <>
      <Router>
        <div className="App">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign_in" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sign_out" />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
                children= {[
                  <Route key="profile" path="/profile/:id" element={<Profile />} />,
                  <Route key="annonces" path="/annonces" element={<Adverts />}/>,
                  <Route key="annonce/post" path="/annonce/post" element={<AdvertForm />}/>,
                ]} 
              />
              
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App;

import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAtom } from 'jotai';
import Cookies from 'js-cookie'

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Adverts from "./pages/Adverts/Adverts";
import AdvertForm from "./pages/AdvertForm/AdvertForm";

import { authAPI } from './services/fetchData';
import userAtom from './stores/userStore';

import './styles/mixins.scss';


