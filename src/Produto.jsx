import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = useContext(GlobalContext);

  if (global.produtos === null) return null;

  return (
    <div>
      <div>Produtos:</div>
      <ul>
        {global.produtos.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
