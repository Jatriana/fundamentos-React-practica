import React from 'react';

import Button from '../../compartidos/button';
import CamposForm from '../../compartidos/CamposForm.js';
import { noRecordarme } from '.././././../../api/autenticacion';
import Type from 'prop-types';

import './LoginForm.css';
function LoginForm({ onSubmit, estoyCargando }) {
  const [recuerdame, setRecuerdame] = React.useState({ estado: false });
  const [credenciales, setCredenciales] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setCredenciales((oldCredenciales) => {
      const newCredenciales = {
        ...oldCredenciales,
        [event.target.name]: event.target.value,
      };
      return newCredenciales;
    });
  };

  const handleChangeCeckbox = (event) => {
    setRecuerdame((recuerdame) => {
      const newRecuerdame = {
        ...recuerdame,
        estado: event.target.checked,
      };
      return newRecuerdame;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(credenciales);
  };

  if (!recuerdame.estado) {
    noRecordarme();
  }
  const { email, password } = credenciales;

  return (
    <form className="paginalogin" onSubmit={handleSubmit}>
      <CamposForm
        type="text"
        name="email"
        label="email o usuario"
        className="loginForm-campo"
        value={email}
        onChange={handleChange}
      ></CamposForm>
      <CamposForm
        type="password"
        name="password"
        label="contraseña"
        className="loginForm-campo"
        value={password}
        onChange={handleChange}
      ></CamposForm>

      <div>
        <input type="checkbox" onChange={handleChangeCeckbox}></input>
        Recuerdame
      </div>

      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={estoyCargando || !email || !password}
      >
        Acceder
      </Button>
    </form>
  );
}

LoginForm.Type = {
  onSubmit: Type.func.isRequired,
  estoyCargando: Type.bool.isRequired,
};
export default LoginForm;
