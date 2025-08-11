import React from 'react';

const Button = ({ handleClick, texto, estilo }) => {
  return (
    <button onClick={handleClick} style={estilo}>
      {texto}
    </button>
  );
};

export default Button;
