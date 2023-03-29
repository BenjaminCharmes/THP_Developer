// Hooks
import { useState, useEffect } from "react";

// React icons
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';

// SCSS
import "./Footer.scss";

export default function Footer() {

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenClick = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
  
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const actualDate = new Date();

  return (
    <div className="footer">
      <p>Noesia © 2023 - {actualDate.getFullYear()}</p>
      { isFullScreen ? 
          <RxExitFullScreen onClick={handleFullScreenClick} /> 
          :
          <RxEnterFullScreen onClick={handleFullScreenClick} />
      }
    </div>
  );
}
