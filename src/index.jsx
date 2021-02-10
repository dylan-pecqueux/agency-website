/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import 'style.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import Navbar from 'components/Navbar';
import ThemeContext from 'ThemeContext';

const App = () => {
  const [theme, setTheme] = React.useState(localStorage.agencyTheme || 'light');
  React.useEffect(() => {
    if (
      !localStorage.agencyTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    }
  }, []);
  React.useEffect(() => {
    localStorage.agencyTheme = theme;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(localStorage.agencyTheme);
  }, [theme]);
  return (
    <Router>
      <ThemeContext.Provider value={{
        theme,
        change: () => (theme === 'light' ? setTheme('dark') : setTheme('light')),
      }}
      >
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </main>
      </ThemeContext.Provider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
