import React from 'react';
import ReactDOM from 'react-dom';
import { IndexPages } from './pages';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';

//Provider adiciona a store ao projeto

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore(reducers)}>
        <IndexPages/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
