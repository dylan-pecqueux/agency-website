/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from 'ThemeContext';

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const textBtn = theme.theme === 'light' ? 'change to dark theme' : 'change to light theme';

  return (
    <header>
      <nav>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/works">Works</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="nav-theme">
          <button className="btn-nav" type="button" onClick={theme.change}>{textBtn}</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
