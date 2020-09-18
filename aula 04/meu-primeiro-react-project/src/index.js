import React from 'react';
import ReactDOM from 'react-dom';
import Componente1 from './Componente1';
import {Componente2} from './Componente2';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Componente1 />
    <Componente2 title = "Página 2"/>
    <Componente2 title = "Página 3"/>
  </React.StrictMode>,
  document.getElementById('root')
);