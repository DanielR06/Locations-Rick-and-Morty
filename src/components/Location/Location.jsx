import React from 'react';
import './Location.css';
const Location = ({name, type, dimension, residents}) => {
  return (
    <div className="container__location">
      <h1>Nombre: {name}</h1>
      <div className="subcontainer__locations">
        <p>Tipo: {type}</p>
        <p>Dimension: {dimension}</p>
        <p>Poblacion: {residents.length}</p>
      </div>
    </div>
  );
};

export default Location;
