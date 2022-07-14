// Este eh o primeiro arquivo JavaScript carregado pela aplicacao

import React from 'react'; // Importando a biblioteca React
import ReactDOM from 'react-dom'; // Integração do React com a DOM (arvore de elementos do HTML)
import App from './App';

// Metodo 'render'
ReactDOM.render(
  // 'App' eh um componente dentro do React
  <App />,
  document.getElementById('root')
);
