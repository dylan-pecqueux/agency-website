/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import ListContext from 'ListContext';

const HeaderWorks = () => {
  const listContext = useContext(ListContext);
  const txtBtn = listContext.list ? '||| Change to card' : '- Change to list';
  return (
    <div className="works">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <button className="btn-work" type="button" onClick={listContext.change}>{txtBtn}</button>
    </div>
  );
};

export default HeaderWorks;
