import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = useContext(GlobalContext);

  return (
    <div>
      <div>Contador: {global.count}</div>
      <button onClick={() => global.adicionarUm()}>Clique</button>
      <button onClick={() => global.adicionarDois()}>Clique</button>
    </div>
  );
};

export default Produto;
