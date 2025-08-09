import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div key={nome} style={{ border: '1px solid black', margin: '1rem', padding: '10px' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map(prop => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
