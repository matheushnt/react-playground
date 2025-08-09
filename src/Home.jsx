import React from 'react';
import Menu from './Menu';
import Titulo from './Titulo';

const Home = () => {
  return (
    <>
      <section>
        <Titulo texto="Home" cor="red" />
        <p>Essa é a home do site</p>
      </section>
    </>
  );
};

export default Home;
