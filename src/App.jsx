import { React } from 'react';

const App = () => {
  window.addEventListener('scroll', ({ target }) => console.log(target));

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={({ target }) => alert(target.textContent)}>Clique</button>
    </div>
  );
};

export default App;
