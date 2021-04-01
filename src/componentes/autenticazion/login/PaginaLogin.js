import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../api/autenticacion.js'

import '../login/PaginaLogin.css'

function PaginaLogin(){


    return (
        <div className="paginaLogin">
            <h1 className="paginaLogin-title">acceso a Nodeapi</h1>
            <LoginForm onSubmit={login}></LoginForm>
        </div>
    )
}

export default PaginaLogin
