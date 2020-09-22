import React from 'react';
import ReactDOM from 'react-dom';
import { IndexPages } from './pages';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IndexPages/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
