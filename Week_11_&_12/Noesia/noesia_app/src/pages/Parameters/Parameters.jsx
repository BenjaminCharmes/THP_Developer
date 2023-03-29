// Components
import AvailableSoon from "../../components/AvailableSoon/AvailableSoon";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

// Assets
import ParametersBackground from "../../assets/images/maze.webp";

// SCSS
import './Parameters.scss';

export default function Parameters() {
  return (
    <div className='parameters'>
      <div className='parameters-items'>
        <div className="parameters-item">
          <label>Dark-mode</label>
          <div className='dark-mode'>
            <AvailableSoon />
            <input type="checkbox" value="None" id="dark-mode" name="check" />
            {/* <label for="dark-mode"></label> */}
          </div>
        </div>
        <div className="parameters-item">
          <label>Cursor option</label>
          <div className='cursor-option'>
            <AvailableSoon />
            <input type="checkbox" value="None" id="cursor-option" name="check" />
            {/* <label for="cursor-option"></label> */}
          </div>
        </div>
        <div className="parameters-item">
          <label>Sound</label>
          <div className='sound'>
            <AvailableSoon />
            <input type="checkbox" value="None" id="sound" name="check" />
            {/* <label for="sound"></label> */}
          </div>
        </div>
        <div className='button-return'>
          <ButtonLink content='Retour' path='/'/>
        </div>
      </div>
      <img className='parameters-background-image' src={ParametersBackground} alt="une pyramide au milieu d'un labyrynthe"/>
    </div>
  )
}
