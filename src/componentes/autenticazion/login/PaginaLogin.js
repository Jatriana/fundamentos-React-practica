import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/autenticacion';

import '../login/PaginaLogin.css';


function PaginaLogin({onlogin}) {



    
  return (
    <div className="paginaLogin">
      <h1 className="paginaLogin-title">acceso a Nodeapi</h1>
      <LoginForm onSubmit={credenciales => login(credenciales)}/>
    </div>
  );
}

export default PaginaLogin;
