import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { IndexPages } from './pages';

ReactDOM.render(
  <React.StrictMode>
   <IndexPages/>
  </React.StrictMode>,
  document.getElementById('root')
);
