import React from 'react';

const Titulo = ({ texto, cor }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

export default Titulo;
