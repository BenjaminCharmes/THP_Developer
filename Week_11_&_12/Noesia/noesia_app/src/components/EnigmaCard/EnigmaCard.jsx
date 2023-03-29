// React Router
import { Link } from 'react-router-dom';

// SCSS
import './EnigmaCard.scss';

import AvailableSoon from '../../components/AvailableSoon/AvailableSoon'

export default function EnigmaCard({enigma, path}) {

  return (
    <>
      <div className='enigma-card'>
        <AvailableSoon />
        <Link to={path}>
          <div className='enigma-content'>
            <p className='enigma-id'>{enigma.id}</p>
          </div>
        </Link>
      </div> 
    </>
  )
}
