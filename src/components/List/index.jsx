/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ client, slug }) => (
  <div>
    <h2>{client}</h2>
    <Link to={`/works/${slug}`}>Voir le projet</Link>
  </div>
);

export default List;
