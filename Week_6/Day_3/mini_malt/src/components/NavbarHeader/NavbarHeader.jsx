import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { fullNameAtom } from '../../stores/user';
import { skillsCountAtom } from '../../stores/skills';

const NavbarHeader = () => {
  const fullName = useAtom(fullNameAtom);
  const skillsCount = useAtom(skillsCountAtom);
  console.log(skillsCount)

  return (
    <div className="Navbar">
      <Link to="/">Mini Malt 🌾</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <h1>
          {fullName}
        </h1>
        <small>{skillsCount[0] > 0 ? `${skillsCount[0]} compétences` : null}</small>
      </div>
    </div>
  );

}

export default NavbarHeader;