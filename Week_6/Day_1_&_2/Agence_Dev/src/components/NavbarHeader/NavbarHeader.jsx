import { Link } from 'react-router-dom';
import { Switch, Space } from 'antd';
import { ThemeContext } from '../../App';
import { useContext } from 'react';

const NavbarHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="Navbar">
      <Link to="/">Agence Web 🧑‍💻</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
      </div>
      <div>
        <Space direction="vertical">
          <Switch
            checked={theme === 'light'}
            checkedChildren="☀️"
            unCheckedChildren="🌛"
            onChange={toggleTheme}
          />
        </Space>
      </div>
    </div>
  );

}

export default NavbarHeader;