import React from 'react';
import T from 'prop-types';
import LoginForm from './LoginForm.js';
import { login } from '../../../api/autenticacion.js';

import '../login/PaginaLogin.css';

function PaginaLogin({ estoyLogeado, history }) {
  const [error, setError] = React.useState(null);
  const [estoyCargando, setEstoyCargando] = React.useState(false);
  const estaRegistrado = React.useRef(false);

  const resetError = () => setError(null);
  React.useEffect(() => {
    if (estaRegistrado.current) {
      estoyLogeado();
      history.push('/');
    }
  });

  const handleSubmit = async (credenciales) => {
    resetError();
    setEstoyCargando(true);
    try {
      await login(credenciales);
      estoyLogeado();
      estaRegistrado.current = true;
    } catch (error) {
      setError(error);
    } finally {
      setEstoyCargando(false);
    }
  };

  return (
    <div className="paginaLogin">
      <h1 className="paginaLogin-title">acceso a Nodeapi</h1>
      <LoginForm onSubmit={handleSubmit} estoyCargando={estoyCargando} />
      {error && (
        <div onClick={resetError} className="paginaLogin-error">
          [X] {error.message}
        </div>
      )}
      {estoyCargando && (
        <div className="paginaLogin-cargando">Cargando datos</div>
      )}
    </div>
  );
}

export default PaginaLogin;
