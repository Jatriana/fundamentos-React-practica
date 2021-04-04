import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom'

// import { ReactComponent as Icon } from '../../assets/anuncio.svg';
import Button from '../compartidos/button';
import {cerrarSecion} from './../../api/autenticacion'
import Type from 'prop-types'
import './header.css';

const Header = ({ className, estaRegistrado,cerrar, ...props }) => {

  const handleCerrar=()=>{
    cerrar()
    cerrarSecion()


  }
  return (
    <header className={classNames('header', className)} {...props}>
      <Link to="/">
      <div className="header-logo">
        {/* <Icon width="32" height="32" /> */} NODEPOP
      </div>
      </Link>
      <nav className="header-nav">
        <Button
            as={Link}
          to="/new"
          variant="primary"
          className="header-button"
        >
          CrearAnuncio
        </Button>
        {estaRegistrado ? (
          <Button
            className="header-button"
             onClick={handleCerrar}
          >
            cerrar
          </Button>
        ) : (
          <Button
            // as={Link}
            to="/login"
            className="header-button"
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};


Header.prototype={
  estaRegistrado:Type.bool,
  cerrar: Type.func.isRequired
}

export default Header;
