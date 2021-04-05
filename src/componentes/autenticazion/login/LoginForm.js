import React from 'react';

import Button from '../../compartidos/button';
import CamposForm from '../../compartidos/CamposForm.js';
import {recuerdame}from '../../../api/autenticacion'
import Type from 'prop-types'

import './LoginForm.css';
/**implemento hooks para las input */
function LoginForm({ onSubmit, estoyCargando, }) {
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
  const Checkbox = ({ fnChange, title = '', checked =false}) => (
    <label>
      <input
        onChange={(event) => {
          if (fnChange !== undefined) fnChange(event.target.checked);
        }}
        type="checkbox"
        checked ={checked}
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
 
  if(state.change){
    recuerdame()
  }
  return (
    <form className="paginalogin" onSubmit={handleSubmit}checked={state.change} >
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
      <Checkbox title="recuerdame" fnChange={click}  checked={state.change}/>

      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={estoyCargando ||!email || !password}
      >
        Acceder
      </Button>
    </form>
  );
}

LoginForm.Type={
  onSubmit:Type.func.isRequired,
  estoyCargando:Type.bool.isRequired
}
export default LoginForm;
