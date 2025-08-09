import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';

const Titulo = ({ cor, texto, children }) => {
  return (
    <div>
      <h1 style={{ color: cor }}>
        {texto}, {children}
      </h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Olá, Mundo!!!" />
      <Titulo cor="gray" texto="Olá, senhoras e senhores!!!" />
      <Titulo cor="green" texto="Boa Noite">
        Isso é o children
        <p>Oi oi OI OI oI</p>
      </Titulo>
    </div>
  );
};

export default App;
