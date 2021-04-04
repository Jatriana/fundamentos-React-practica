import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import storage from './componentes/autenticazion/storage';
import { configCliente } from './api/cliente';

const accessToken = storage.get('token');
console.log(accessToken);
configCliente({ accessToken });

ReactDOM.render(
  <Router>
    <App seRegistraInicialmente={!!accessToken} />
  </Router>,
  document.getElementById('root')
);
