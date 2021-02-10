/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import uuid from 'react-uuid';
import ListContext from 'ListContext';
import Card from 'components/Card';
import List from 'components/List';

const NavStudyCase = ({ data }) => {
  const listContext = useContext(ListContext);
  return (
    <ul className={listContext.list ? 'list' : 'card'}>
      {data.map((element) => (
        <li key={uuid()}>
          {listContext.list && (
          <List
            client={element.client}
            slug={element.slug}
          />
          )}
          {!listContext.list && (
          <Card
            client={element.client}
            title={element.title}
            slug={element.slug}
          />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavStudyCase;
