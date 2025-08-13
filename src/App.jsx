import React, { useMemo } from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const App = () => {
  const t0 = performance.now();

  const valor = useMemo(() => operacaoLenta(), []);

  console.log(performance.now() - t0);

  return <p>{valor}</p>;
};

export default App;
