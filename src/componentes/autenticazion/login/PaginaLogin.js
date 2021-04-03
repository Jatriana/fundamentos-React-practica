import React from 'react';
import LoginForm from './LoginForm.js';
import { login } from '../../../api/autenticacion.js';


import '../login/PaginaLogin.css';

function PaginaLogin({ estoyLogeado, }) {
  /**estado de error en la llamada */
  const [error, setError] = React.useState(null);
  const [estoyCargando, setEstoyCargando] = React.useState(false);
  const resetError = () => setError(null);
  const handleSubmit = async (credenciales) => {
    try {
      setEstoyCargando(true);

      await login(credenciales);
      estoyLogeado();
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
         [X]  {error.message}
        </div>
      )}
      {estoyCargando && (
        <div className="paginaLogin-cargando">Cargando datos</div>
      )}
    </div>
  );
}


export default PaginaLogin;
