import React, { useState } from 'react';
import Button from './Button';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick({ target }) {
    setLoading(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.textContent}`);
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <>
      <div>
        <Button handleClick={handleClick} texto="notebook" />
        <Button handleClick={handleClick} texto="smartphone" />
        <Button handleClick={handleClick} texto="tablet" />
      </div>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
