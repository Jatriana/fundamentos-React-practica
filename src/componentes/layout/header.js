import React from 'react';
import classNames from 'classnames';

// import { ReactComponent as Icon } from '../../assets/anuncio.svg';
import './header.css';
import Button from '../compartidos/button';

const Header = ({ className, isLogged, ...props }) => {
  return (
    <header className={classNames('header', className)} {...props}>
      {/* <Link to="/"> */}
      <div className="header-logo">
        {/* <Icon width="32" height="32" /> */}
      </div>
      {/* </Link> */}
      <nav className="header-nav">
        <Button
          //   as={Link}
          to="/tweet"
          variant="primary"
          className="header-button"
        >
          Anuncio
        </Button>
        {isLogged ? (
          <Button
            className="header-button"
            // onClick={() => logout().then(onLogout)}
          >
            Log out
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

export default Header;
