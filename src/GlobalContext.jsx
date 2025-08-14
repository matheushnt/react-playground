import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    async function buscarProdutos() {
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
      const json = await response.json();
      setProdutos(json);
    }

    buscarProdutos();
  }, []);

  function limparDados() {
    setProdutos(null);
  }

  return <GlobalContext.Provider value={{ produtos, limparDados }}>{children}</GlobalContext.Provider>;
};
