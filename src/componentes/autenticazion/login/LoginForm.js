import React from 'react';


import Button from '../../compartidos/button';
import CamposForm from '../../compartidos/CamposForm';

import './LoginForm.css';
/**implemento hooks para las input */
function LoginForm({ onSubmit }) {
  const [credenciales, setCredenciales] = React.useState({
    username: '',
    password: '',
  });

  const handleUsernameChange = (event) => {
    const newcredenciales = { ...credenciales, username: event.target.value };
    setCredenciales(newcredenciales);
  };

  const handlePasswordChange = (event) => {
    const newcredenciales = { ...credenciales, password: event.target.value };
    setCredenciales(newcredenciales);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(credenciales);
    
  }
  const {username, password}= credenciales
  /**componente de checkbox de recordar contraseña */
  const Checkbox = ({ fnChange, title = '', checked = false }) => (
    <label>
      <input
        onChange={(event) => {
          if (fnChange !== undefined) fnChange(event.target.checked);
        }}
        type="checkbox"
        checked={checked}
      />
      {title}
    </label>
  );

  const initialState = {
    change: false,
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, setState] = React.useReducer(reducer, initialState);
  const click = (event) => setState({ change: event });
  // const clearFilter = () => setState(initialState);

  return (
    <form className="paginalogin" onSubmit={handleSubmit}>
      <CamposForm
        type="text"
        name="username"
        label="email o usuario"
        className="loginForm-campo"
        value={username}
        onChange={handleUsernameChange}
      ></CamposForm>
      <CamposForm
        type="password"
        name="password"
        label="contraseña"
        className="loginForm-campo"
        value={password}
        onChange={handlePasswordChange}
      ></CamposForm>
      <Checkbox title="recuerdame" fnChange={click} checked={state.change} />

      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={!username || !password}
      >
        Acceder
      </Button>
    </form>
  );
}

export default LoginForm;
