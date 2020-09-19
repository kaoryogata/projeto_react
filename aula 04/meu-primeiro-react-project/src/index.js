import React from 'react';
import ReactDOM from 'react-dom';
import Teste from './Componente1';
import { Componente2 } from './Componente2';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Componente3 } from './Componente3';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
      <nav>
        <ul>
            <li>
              <Link to="/componente1">Componente1</Link>
            </li>
            <li>
              <Link to="/componente2">Componente2</Link>
            </li>
            <li>
              <Link to="/componente3">Componente3</Link>
            </li>
          </ul>
      </nav>
      <Switch>
        <Route path="/componente1" component={Teste}/>
        <Route path="/componente2" component={Componente2}/>
        <Route path="/componente3" component={Componente3}/>
      </Switch>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
