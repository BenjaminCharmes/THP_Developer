import { Link } from 'react-router-dom';

const NavbarHeader = () => {

  return (
    <div className="Navbar">
      <Link to="/">Mini Social Network 🌍</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );

}

export default NavbarHeader;