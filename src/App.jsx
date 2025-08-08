import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';

const Teste = () => {
  const active = false;

  if (active) {
    return 'Está Ativo';
  } else {
    return null;
  }
};

const App = () => {
  return (
    <div>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
