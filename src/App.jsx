import React, { useState, useEffect } from 'react';
import Produto from './Produto';
import Button from './Button';

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocalStorage = localStorage.getItem('produto');
    if (produtoLocalStorage !== null) setProduto(produtoLocalStorage);
  }, []);

  useEffect(() => {
    if (produto !== null) localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.textContent);
  }

  return (
    <>
      <div>
        <h1>Preferência: {produto}</h1>
        <Button handleClick={handleClick} texto="notebook" estilo={{ marginRight: '16px' }} />
        <Button handleClick={handleClick} texto="smartphone" estilo={{ marginRight: '16px' }} />
      </div>
      <Produto produto={produto} />
    </>
  );
};

export default App;
