/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from 'ThemeContext';
import lune from 'images/lune.png';
import sun from 'images/sun2.png';

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const btnState = theme.theme === 'light' ? 'btn-left' : 'btn-right';

  return (
    <header>
      <nav>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/works">Works</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="nav-theme">
          <button className={`btn-theme ${btnState}`} type="button" onClick={theme.change}>
            <div />
            <img className="lune" src={lune} alt="icone lune" />
            <img className="sun" src={sun} alt="icone lune" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
