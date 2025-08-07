import { React } from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const App = () => {
  const dados = luana;

  const total = dados.compras
    .map(compra => Number(compra.preco.replace('R$ ', '')))
    .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        {dados.ativa ? (
          <span style={{ color: 'green' }}>Ativa</span>
        ) : (
          <span style={{ color: 'red' }}>Inativa</span>
        )}
      </p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito.</p>}
    </>
  );
};

export default App;
