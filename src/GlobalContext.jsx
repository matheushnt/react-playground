import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = useState(0);

  function adicionarUm() {
    setCount((prevState) => prevState + 1);
  }

  function adicionarDois() {
    setCount((prevState) => prevState + 2);
  }
  return <GlobalContext.Provider value={{ count, adicionarUm, adicionarDois }}>{children}</GlobalContext.Provider>;
};
