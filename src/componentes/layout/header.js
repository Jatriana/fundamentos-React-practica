import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import FiltroAnuncioForm from '../util/FiltroAnunciosForm';

import Button from '../compartidos/button';
import { cerrarSecion } from './../../api/autenticacion';

import Type from 'prop-types';
import './header.css';
import { set } from 'date-fns';

const Header = ({
  className,
  estaRegistrado,
  cerrar,
  setActivarFiltro,
  activarFiltro,

  ...props
}) => {
  const [filtro, setfiltro] = React.useState({ estado: false });

  const handleCerrar = () => {
    cerrarSecion().then(cerrar);
  };

  const handleChangeCeckbox = (event) => {
    setfiltro((filtro) => {
      const newfiltro = {
        ...filtro,
        estado: event.target.checked,
      };
      return newfiltro;
    });
  };

  if (filtro.estado) {
    setActivarFiltro(true);
  } else {
    setActivarFiltro(false);
  }

  return (
    <header className={classNames('header', className)} {...props}>
      <Link to="/">
        <div className="header-logo">NODEPOP</div>
      </Link>

      <nav className="header-nav">
        <div>
          <div></div>
          <label>
            Activar filtro
            <div>
              <input type="checkbox" onChange={handleChangeCeckbox}></input>
            </div>
          </label>
        </div>
        <div>
          {filtro.estado ? (
            <FiltroAnuncioForm
              className="header"
              filtro={filtro}
              {...props}
            ></FiltroAnuncioForm>
          ) : (
            <div></div>
          )}
        </div>
        <Button
          as={Link}
          to="/anuncio/new"
          variant="primary"
          className="header-button"
        >
          CrearAnuncio
        </Button>
        {estaRegistrado ? (
          <Button
            as={Link}
            to="/login"
            className="header-button"
            onClick={handleCerrar}
          >
            cerrar
          </Button>
        ) : (
          <Button as={Link} to="/login" className="header-button">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

Header.prototype = {
  estaRegistrado: Type.bool,
  cerrar: Type.func.isRequired,
};

export default Header;
