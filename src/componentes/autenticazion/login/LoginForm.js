import React from 'react';

import Button from '../../compartidos/button';
import CamposForm from '../../compartidos/CamposForm';

import './LoginForm.css';
/**implemento hooks para las input */
function LoginForm({ onSubmit }) {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(credenciales);
  };

  const { email, password } = credenciales;
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
      <Checkbox title="recuerdame" fnChange={click} checked={state.change} />

      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={!email || !password}
      >
        Acceder
      </Button>
    </form>
  );
}

export default LoginForm;
