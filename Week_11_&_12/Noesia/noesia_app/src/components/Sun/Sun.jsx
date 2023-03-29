// SCSS
import './Sun.scss';

export default function Sun({fireCount}) {

  const fires = Array.from({length: fireCount}).map((_, index) => (
    <div key={index} className="sun_fire">
      <div className="sun_fire_inner"></div>
    </div>
  ))

  return (
    <div className="ui">
      <div className="sun">
        {fires}
        <div className="sun_border"></div>
      </div>
      <div className="cover"></div>
    </div>
  );
};
