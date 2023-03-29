// Hooks
import { useState } from 'react';
import { useFetchGet } from '../../hooks/fetchData/useFetchData';

// Components
import Button from '../../components/ButtonLink/ButtonLink';
import Sidebar from '../../components/Sidebar/Sidebar';

// Assets
import ProfileImg from '../../assets/images/digicode.webp';
import ProfileBackground from '../../assets/images/discover02.webp';

// React icons
import { RiSurgicalMaskLine } from 'react-icons/ri'
import { BsGear } from 'react-icons/bs'
import { GiSwordsPower, GiConcentrationOrb, GiChest } from 'react-icons/gi'
import { FaTrophy, FaHandSpock } from 'react-icons/fa'
import { SiAlchemy } from 'react-icons/si'

// SCSS
import './Profile.scss'

export default function Profile() {

  // User
  const auth_token = localStorage.getItem('Authorization_token');
  const { data: userData } = useFetchGet('member-data', 'user', auth_token);
  const current_user = userData?.user;

    // User histories
  const { data: userHistories } = useFetchGet(`histories?user_id=${current_user?.id}`, 'user_histories');

    // User achievements
  const { data: userAchievements } = useFetchGet(`join_table_user_achievements?user_id=${current_user?.id}`, 'user_achievements');

  // Achievements
  const { data: achievements } = useFetchGet('achievements', 'achievements');

  let numberOfAchievements = 0;
  let numberOfUserAchievements = 0;

  if (achievements) {
    numberOfAchievements = Object.values(achievements).length;
  }

  if (userAchievements) {
    numberOfUserAchievements = Object.values(userAchievements).length;
  }

  // Circle Experience / Karma / Achievements

  const progressCircles = document.querySelectorAll('.progress');

  progressCircles.forEach(circle => {
    const targetProgress = circle.getAttribute('data-target');
    const percentage = targetProgress / 100;
    const circumference = 2 * Math.PI * circle.getAttribute('r');
    const offset = circumference * (1 - percentage);
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${offset}`;
  });

  const [isExperienceHovering, setIsExperienceHovering] = useState(false);
  const [isKarmaHovering, setIsKarmaHovering] = useState(false);
  const [isAchievementHovering, setIsAchievementHovering] = useState(false);

  return (
    <>
      <div className='profile'>
        <img className='profile-background' src={ProfileBackground} alt="Une carte découverte de Noesia" />
        <div className='profile-wrapper'>

          <div className='profile-left'>

            <div className='profile-left-top'>
              <div className="profile-left-top-info">
                <div className="profile-left-top-info-picture">
                  <img className='profile-picture' src={ProfileImg} alt='Un coffre-fort'/>
                </div>
                <div className="profile-left-top-info-name">
                  <h2 className="profile-name">{current_user?.username}</h2>
                  <Button content="Editer le profil" path={`/profil/${current_user?.id}/editer`} />
                </div>
              </div>
              <div className='profile-left-top-player-caract'>

                <div className="container">

                  <div className="gauge-container" onMouseEnter={() => setIsExperienceHovering(true)} onMouseLeave={() => setIsExperienceHovering(false)}>
                    <svg className="gauge" viewBox="0 0 150 150">
                      <circle className="rail" r="67" cx="75" cy="75" />
                      <circle className="progress" r="67" data-target={current_user?.experience.toString()} cx="75" cy="75" />
                    </svg>
                    {isExperienceHovering ? (
                      <span className="center percentage"><span className="value">{current_user?.experience}%</span></span>
                    ) : (
                      <span className="center percentage"><span className="value">{current_user?.level}</span></span>
                    )}
                  </div>

                </div>

                <div className="container">

                  <div className="gauge-container" onMouseEnter={() => setIsKarmaHovering(true)} onMouseLeave={() => setIsKarmaHovering(false)}>
                    <svg className="gauge" viewBox="0 0 150 150">
                      <circle className="rail" r="67" cx="75" cy="75" />
                      <circle className="progress" r="67" data-target={current_user?.karma} cx="75" cy="75" />
                    </svg>
                    {isKarmaHovering ? (
                      <span className="center percentage"><span className="value">{current_user?.karma.toString()} %</span></span>
                    ) : (
                      <SiAlchemy className="center icon" />
                    )}
                  </div>

                  </div>

                  <div className="container">

                  <div className="gauge-container" onMouseEnter={() => setIsAchievementHovering(true)} onMouseLeave={() => setIsAchievementHovering(false)}>
                    <svg className="gauge" viewBox="0 0 150 150">
                      <circle className="rail" r="67" cx="75" cy="75" />
                      <circle className="progress" r="67" data-target={(numberOfUserAchievements/numberOfAchievements*100).toString()} cx="75" cy="75" />
                    </svg>
                    {isAchievementHovering ? (
                      <span className="center percentage"><span className="value">{numberOfUserAchievements} / {numberOfAchievements}</span></span>
                    ) : (
                      <FaTrophy className="center icon" />
                    )}
                  </div>

                </div>

              </div>
            </div>

            <div className='profile-left-bottom'>
              <h2>Caractéristiques</h2>
              <div className='profile-left-bottom-caract'>
                <p ><RiSurgicalMaskLine className='discipline' /> Discipline :</p>
                <p>{current_user?.discipline}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><BsGear className='ingenuity' /> Ingéniosité :</p>
                <p>{current_user?.ingenuity}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><GiSwordsPower className='willpower' /> Volonté :</p>
                <p>{current_user?.willpower}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><GiConcentrationOrb className='concentration' /> Concentration :</p>
                <p>{current_user?.concentration}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><GiChest className='guile' /> Ruse :</p>
                <p>{current_user?.guile}</p>
              </div>
              <div className='profile-left-bottom-caract'>
                <p><FaHandSpock className='dexterity' /> Dextérité :</p>
                <p>{current_user?.dexterity}</p>
              </div>
            </div>

          </div>

          <div className='profile-right'>
            <div className='profile-right-header'>
              <h2>Historique des parties</h2>
            </div>
            <div className='profile-right-cards'>
              {userHistories && userHistories?.map(history => (
                <div key={history.id} className='profile-right-card'>
                  <p>Énigme: {history.enigma_id}</p>
                  <p>Status: {history.status}</p>
                  <p>Réalisé le: {history.created_at}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Sidebar />
        </div>
      </div>
    </>
  )
}
