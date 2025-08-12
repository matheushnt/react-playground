import React, { useState, useRef } from 'react';

const App = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = useRef();

  function handleClick() {
    setComentarios((prevState) => [...prevState, input]);
    setInput('');
    inputElement.current.focus();
  }
  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input type="text" ref={inputElement} value={input} onChange={({ target }) => setInput(target.value)} />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
