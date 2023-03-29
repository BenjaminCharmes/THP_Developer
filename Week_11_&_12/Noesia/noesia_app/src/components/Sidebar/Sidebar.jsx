// Hooks
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useFetchGet, useFetchDelete } from '../../hooks/fetchData/useFetchData';

// Components
import ButtonLink from '../../components/ButtonLink/ButtonLink';

// React icons
import { CgProfile } from "react-icons/cg";
import { GiExitDoor, GiReturnArrow } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { HiOutlineMap } from "react-icons/hi";

// SCSS
import "./Sidebar.scss"


export default function Sidebar() {
  const [isProfileHovering, setIsProfileHovering] = useState(false);
  const [isDisconnectHovering, setIsDisconnectHovering] = useState(false);
  const [isConnectHovering, setIsConnectHovering] = useState(false);
  const [isSubscribeHovering, setIsSubscribeHovering] = useState(false);
  const [isGetBackHovering, setIsGetBackHovering] = useState(false);
  const [isMapHovering, setIsMapHovering] = useState(false);
  
  const navigate = useNavigate();

  const auth_token = localStorage.getItem('Authorization_token');
  const { data } = useFetchGet('member-data', 'user', auth_token);
  const current_user = data?.user;
  const { mutate: deleteUser } = useFetchDelete('users/sign_out');
  const logged = auth_token ? true : false;

  const pathname = window.location.pathname.includes('/inscription') || window.location.pathname.includes('/connexion') || window.location.pathname.includes(`/profil/${current_user?.id}`);

  const handleLogout = (e) => {
    localStorage.removeItem('Authorization_token');
    deleteUser(auth_token);
    navigate('/');
  }

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-items'>
          {!logged ? 
            (
              <>
                <div className='sidebar-item' onMouseEnter={() => setIsConnectHovering(true)} onMouseLeave={() => setIsConnectHovering(false)}>
                  <Link to="/connexion"><FaConnectdevelop /></Link>
                  {isConnectHovering ? (
                    <ButtonLink content="Se connecter" path="/connexion"/>
                  ) : 
                    null
                  }
                </div>
                <div className='sidebar-item' onMouseEnter={() => setIsSubscribeHovering(true)} onMouseLeave={() => setIsSubscribeHovering(false)}>
                  <Link to="/inscription"><BsBook /></Link>
                  { isSubscribeHovering ? (
                    <ButtonLink content="S'inscrire" path="/inscription"/>
                  ) : 
                    null
                  }
                </div>
                <div className='sidebar-item' onMouseEnter={() => setIsGetBackHovering(true)} onMouseLeave={() => setIsGetBackHovering(false)}>
                  <Link to='/'><GiReturnArrow /></Link>
                  { isGetBackHovering ? (
                    <ButtonLink content="Menu" path="/"/>
                  ) : 
                    null
                  }
                </div> 
              </>
            ) : ( 
              <>
                { !pathname ? 
                  (
                    <>
                      <div className='sidebar-item' onMouseEnter={() => setIsProfileHovering(true)} onMouseLeave={() => setIsProfileHovering(false)}>
                        <Link to={`/profil/${current_user?.id}`}><CgProfile /></Link>
                        {isProfileHovering ? (
                          <ButtonLink content="Profil" path={`/profil/${current_user?.id}`}/>
                        ) : 
                          null
                        }
                      </div>
                      <div className='sidebar-item' onMouseEnter={() => setIsGetBackHovering(true)} onMouseLeave={() => setIsGetBackHovering(false)}>
                        <Link to='/'><GiReturnArrow /></Link>
                        { isGetBackHovering ? (
                          <ButtonLink content="Menu" path="/"/>
                        ) : 
                          null
                        }
                      </div>
                      <div className='sidebar-item' onMouseEnter={() => setIsDisconnectHovering(true)} onMouseLeave={() => setIsDisconnectHovering(false)}>
                        <Link to='/' onClick={handleLogout}><GiExitDoor /></Link>
                        {isDisconnectHovering ? (
                          <ButtonLink content="Quitter" onClick={handleLogout} path='/'/>
                        ) : 
                          null
                        }
                      </div>
                    </> 
                  ) : (
                    <>
                      <div className='sidebar-item' onMouseEnter={() => setIsProfileHovering(true)} onMouseLeave={() => setIsProfileHovering(false)}>
                        <Link to={`/profil/${current_user?.id}`}><CgProfile /></Link>
                        {isProfileHovering ? (
                          <ButtonLink content="Profil" path={`/profil/${current_user?.id}`}/>
                        ) : 
                          null
                        }
                      </div>
                      <div className='sidebar-item' onMouseEnter={() => setIsMapHovering(true)} onMouseLeave={() => setIsMapHovering(false)}>
                        <Link to='/découverte'><HiOutlineMap /></Link>
                        { isMapHovering ? (
                          <ButtonLink content="Carte" path="/découverte"/>
                        ) : 
                          null
                        }
                      </div>
                      <div className='sidebar-item' onMouseEnter={() => setIsDisconnectHovering(true)} onMouseLeave={() => setIsDisconnectHovering(false)}>
                        <Link to='/' onClick={handleLogout}><GiExitDoor /></Link>
                        {isDisconnectHovering ? (
                          <ButtonLink content="Quitter" onClick={handleLogout} path='/' />
                        ) : 
                          null
                        }
                      </div>
                    </>
                  )
                }
              </>
            )
          }
        </div>
      </div> 
    </>
  )
}
