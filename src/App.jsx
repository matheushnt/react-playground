import React from 'react';
import Home from './Home';
import Produtos from './Produtos';
import Menu from './Menu';

const App = () => {
  const { pathname } = window.location;

  let Component;

  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Menu />
      <Component />
    </section>
  );
};

export default App;
