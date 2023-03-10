export default function Navbar() {
  const auth_token = Cookies.get("auth_token");

  const userInfo = useAtomValue(userAtom);

  const [user, setUser] = useAtom(userAtom);
  const header = "Bearer " + auth_token;

  const handleClick = (e) => {
    e.preventDefault();
    authAPI.logout(header);
    Cookies.remove("auth_token");
    setUser({
      auth_token: null,
      user: {
        id: null,
        username: null,
        email: null,
      },
      loading: false,
      hasErrors: false,
      authenticated: false,
      logged: false,
    });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <strong>Immo</strong>Coin
        </Link>
      </div>
      {userInfo.logged === true ? (
        <div className="userInfo">
          
          <Link to="/annonces">
            Annonces
          </Link>
          <Link to="/annonce/post">
            Poster une annonce
          </Link>
          <Link to="/profile/:id">
            Profile
          </Link>

          <button onClick={handleClick}>Déconnection</button>
        </div>
      ) : (
        <div className="authentication">
          <div className="signin">
            <BsPersonFillCheck />
            <Link to="/sign_in">Connexion</Link>
          </div>
          <div className="reg">
            <GoSignIn />
            <Link to="/register">S'inscrire</Link>
          </div>
        </div>
      )}
    </div>
  );
};



import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useAtomValue, useAtom } from "jotai";

import userAtom from "../../stores/userStore";
import { authAPI } from "../../services/fetchData";

import { GoSignIn } from "react-icons/go";
import { BsPersonFillCheck } from "react-icons/bs";


import "./Navbar.scss";