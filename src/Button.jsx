import React from 'react';

const Button = ({ texto, handleClick }) => {
  return (
    <button onClick={handleClick} style={{ margin: '10px' }}>
      {texto}
    </button>
  );
};

export default Button;
