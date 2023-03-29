// React router
import { Link } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";
import { useFetchGet, useFetchDelete } from "../../hooks/fetchData/useFetchData";

// Components
import Button from "../../components/Button/Button";

// Assets
import HomeBackground from '../../assets/images/background.webp';

// SCSS
import "./Home.scss";

// Animations
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  // User
  const auth_token = localStorage.getItem('Authorization_token');
  const { data: userData } = useFetchGet('member-data', 'user', auth_token);
  const current_user = userData?.user;
  const current_user_passed_door = current_user?.is_door_passed
  const logged = auth_token ? true : false;

  // Logout
  const { mutate: deleteUser } = useFetchDelete('users/sign_out');

  const handleLogout = (e) => {
    localStorage.removeItem('Authorization_token');
    deleteUser(auth_token);
    navigate('/');
  }

  // Story
  const [story, setStory] = useState(false)

  useEffect(() => {
    setStory(true)
  }, [])

  function handleStory() {
    setStory(!story);
  }

  // Array.from(document.getElementsByClassName("home-item"))
  // .forEach((item, index) => {
  //   item.addEventListener("mouseover", () => {
  //     item.classList.add("active");
  //     const home = document.querySelector(".home")
  //     if (home) {
  //       home.setAttribute("userDactive-index", index);
  //     }
  //   });
  //   item.addEventListener("mouseout", () => {
  //     item.classList.remove("active");
  //   });
  // });

  return (
    <>
      <div className="home-background">
        { logged ? (
          <div className="home">
            <div className="home-items" >
              <div className="home-item">
                { current_user_passed_door ? (
                  <Link to='/découverte'>
                    Jouer
                  </Link>
                ) : (
                  <Link to='/porte'>
                    Jouer
                  </Link>
                )}
              </div>
              <div className="home-item" >
                <Link to='/paramètres'>
                  Paramètres
                </Link>
              </div>
              <div className="home-item">
                <Link onClick={handleLogout}>
                  Se déconnecter
                </Link>
              </div>
            </div>
            {/* <div className="home-background-pattern"></div> */}
            <img className="home-background-image" src={HomeBackground} alt='La porte qui donne accès à Noesia'></img>
          </div>  
        ) : ( 
          <>
            { story ? (
              <div className="story-overlay">
                <div className="story-content">
                  <div className='story-title'>
                    <h1>Noesia</h1>
                  </div>
                  <div className='story-plot'>
                    <p>
                      <TypeAnimation
                      sequence={[
                        1000,
                        "Au milieu d'un désert aride et désolé, un portail mystérieux venait d'apparaître. Les scientifiques, fascinés par cette étrange apparition, se rassemblèrent autour du portail pour en étudier les propriétés. À chaque nouvelle connexion, le portail multipliait les chemins, offrant de nouvelles perspectives aux chercheurs. Mais la connaissance ne se suffit pas à elle seule pour prospérer. Les intentions de ceux qui l'utilisent peuvent la rendre utile ou dangereuse. Certains voulaient exploiter le portail pour en tirer profit, tandis que d'autres cherchaient à comprendre les secrets de cet univers fantastique." // Types 'One'
                      ]}
                      speed= {75}
                      wrapper="strong"
                      cursor={true}
                      repeat={Infinity}
                      style={{ fontSize: '1em' }}
                      />
                    </p>
                  </div>
                  <div className='story-btn'>
                    <Button onClick={handleStory} content='Skip'/>
                  </div>
                </div>
                <img className="story-background-image" src={HomeBackground} alt='La porte qui donne accès à Noesia'></img>
              </div>
              ) : (
              <div className="home">
                <div className="home-items" >
                  <div className="home-item">
                    <Link to='/porte'>
                      Jouer
                    </Link>
                  </div>
                  <div className="home-item">
                    <Link to='/connexion'>
                      Se connecter
                    </Link>
                  </div>
                  <div className="home-item">
                    <Link to='/inscription'>
                      S'inscrire
                    </Link>
                  </div>
                </div>
                {/* <div className="home-background-pattern"></div> */}
                <img className="home-background-image" src={HomeBackground} alt='La porte qui donne accès à Noesia'></img>
              </div>  
            )}     
          </>    
        )}    
      </div>
    </>
  );
};

export default Home;
