import React, { useEffect, useState } from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto !== null) {
      async function fetchProduto(produto) {
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
        const json = await response.json();
        setDados(json);
      }

      fetchProduto(produto);
    }
  }, [produto]);

  if (!dados) return null;

  return (
    <div>
      <h2>{dados.nome}</h2>
      <h2>R$ {dados.preco}</h2>
    </div>
  );
};

export default Produto;
