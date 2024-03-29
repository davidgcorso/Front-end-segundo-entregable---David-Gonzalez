import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    
    document.documentElement.classList.toggle('dark-theme', newTheme === 'dark');
  };

  const navbarClass = theme === 'dark' ? 'navbar-dark' : 'navbar-light';

  return (
    <nav className={`navbar ${navbarClass}`}>
      <ul>
        <li><NavLink to="/home">Inicio</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
        <li><NavLink to="/favs">Destacados</NavLink></li>
      </ul>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </nav>
  );
};

export default Navbar;

