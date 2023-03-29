// Hooks
import { useFetchGet } from '../../../hooks/fetchData/useFetchData';

// Components
import Sidebar from '../../../components/Sidebar/Sidebar';
import EnigmaCard from '../../../components/EnigmaCard/EnigmaCard';
// import WorldsBar from '../../../components/WorldsBar/WorldsBar';

// Assets
import DiscoverMapBackground from '../../../assets/images/discover01.webp';

// SCSS
import './DiscoverMap.scss';

export default function DiscoverMap() {
  const { isLoading, data: enigmas, } = useFetchGet('enigmas', 'enigmas');

  return (
    <>
      <div className='discover-map'>
        {/* <WorldsBar /> */}
        <div className='enigmas'>
          { enigmas ? (enigmas.map(enigma => (
            <EnigmaCard enigma={enigma} key={enigma.id} path={`/enigme/${enigma.id}`}/>
            ))
            ) : (
              <div>
                {isLoading}
              </div>
            )
          }
        </div>
        <Sidebar />
        <img className='discover-background-image' src={DiscoverMapBackground} alt="Carte du monde découverte"/>
      </div>
    </>
  )
}
