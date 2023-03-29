// Hooks
import { useEffect } from 'react';

// React icons
import { FaTrophy } from 'react-icons/fa';

// SCSS
import './AchievementPopUp.scss';


function AchievementPopUp({ text, onClose }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className='achievement-popup'>
      <div className='achievement-popup-icon'>
        <FaTrophy />
      </div>
      <div className='achievement-popup-text'>
        <h2>Succès déverrouillé !</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default AchievementPopUp;
