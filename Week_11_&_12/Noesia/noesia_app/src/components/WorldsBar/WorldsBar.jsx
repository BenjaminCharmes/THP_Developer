// React router
import { Link } from "react-router-dom";

// Hooks
import { useState } from 'react';

// React icons
import { GiAbstract005, GiAbstract010, GiAbstract011, GiAbstract014  } from "react-icons/gi";

// Components
import ButtonLink from '../ButtonLink/ButtonLink';

// SCSS
import './WorldsBar.scss';

export default function WorldsBar() {
  const [isFirstWorldHovering, setIsFirstWorldHovering] = useState(false);
  const [isSecondWorldHovering, setIsSecondWorldHovering] = useState(false);
  const [isThirdWorldHovering, setIsThirdWorldHovering] = useState(false);
  const [isFourthWorldHovering, setIsFourthWorldHovering] = useState(false);

  return (
    <div className='worlds-bar'>
      <div className='worlds-items'>
        <div className='worlds-item' onMouseEnter={() => setIsFirstWorldHovering(true)} onMouseLeave={() => setIsFirstWorldHovering(false)}>
          <Link to='#'><GiAbstract005 /></Link>
            { isFirstWorldHovering ? (
              <ButtonLink content='Agon' path="#"/>
            ) : 
              null
            }
        </div>
        <div className='worlds-item' onMouseEnter={() => setIsSecondWorldHovering(true)} onMouseLeave={() => setIsSecondWorldHovering(false)}>
          <Link to='#'><GiAbstract010 /></Link>
            { isSecondWorldHovering ? (
              <ButtonLink content='Aléa' path="#"/>
            ) : 
              null
            }
        </div>
        <div className='worlds-item' onMouseEnter={() => setIsThirdWorldHovering(true)} onMouseLeave={() => setIsThirdWorldHovering(false)}>
          <Link to='#'><GiAbstract011 /></Link>
            { isThirdWorldHovering ? (
              <ButtonLink content='Mimicry' path="#"/>
            ) : 
              null
            }
        </div>
        <div className='worlds-item' onMouseEnter={() => setIsFourthWorldHovering(true)} onMouseLeave={() => setIsFourthWorldHovering(false)}>
          <Link to='#'><GiAbstract014 /></Link>
            { isFourthWorldHovering ? (
              <ButtonLink content='Ilinx' path="#"/>
            ) : 
              null
            }
        </div>
      </div>
    </div>
  )
}
