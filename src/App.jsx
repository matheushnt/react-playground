import React, { useState } from 'react';

const App = () => {
  const [contar, setContar] = useState(1);
  const [itens, SetItens] = useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    SetItens([...itens, `Item ${contar + 1}`]);
  }

  return (
    <div>
      <ul>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
