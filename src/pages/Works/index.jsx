/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import studyCaseData from 'Data/studyCaseData';
import NavStudyCase from 'components/NavStudyCase';
import StudyCase from 'pages/StudyCase';
import ListContext from 'ListContext';
import HeaderWorks from 'components/HeaderWorks';

const Works = () => {
  const [list, setList] = React.useState(true);
  return (
    <Router>
      <Switch>
        <Route path="/works" exact>
          <ListContext.Provider value={{
            list,
            change: () => (list ? setList(false) : setList(true)),
          }}
          >
            <HeaderWorks />
            <NavStudyCase data={studyCaseData} />
          </ListContext.Provider>
        </Route>
        <Route path="/works/:studyCaseSlug">
          <StudyCase />
        </Route>
      </Switch>
    </Router>
  );
};

export default Works;
