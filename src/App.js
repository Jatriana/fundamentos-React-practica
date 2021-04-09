import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PaginaLogin } from './componentes/autenticazion/login/';

import {
  PaginaAnuncios,
  PaginaDetalleAnuncio,
  PaginaNuevoAnuncio,
} from './componentes/anuncios/index';

function App({ seRegistraInicialmente }) {
  /**estado logeado */

  const [estaRegistrado, setEstaRegistrado] = React.useState(
    seRegistraInicialmente
  );

  const handleLogin = () => setEstaRegistrado(true);
  const handleLogout = () => setEstaRegistrado(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/anuncio/new">
          <PaginaNuevoAnuncio
            estaRegistrado={estaRegistrado}
            cerrar={handleLogout}
          ></PaginaNuevoAnuncio>
        </Route>

        <Route path="/anuncio/:id">
          {({ match, history }) => (
            <PaginaDetalleAnuncio
              estaRegistrado={estaRegistrado}
              cerrar={handleLogout}
              match={match}
              history={history}
            ></PaginaDetalleAnuncio>
          )}
        </Route>
        <Route path="/login">
          {({ history }) => (
            <PaginaLogin
              estoyLogeado={handleLogin}
              history={history}
            ></PaginaLogin>
          )}
        </Route>

        <Route exact path="/">
          {({ history }) => (
            <PaginaAnuncios
              estaRegistrado={estaRegistrado}
              cerrar={handleLogout}
              history={history}
            />
          )}
        </Route>
        <Route>
          <Redirect to="/" as="/anuncios"></Redirect>
        </Route>

        <Route path="/404">
          <div
            style={{
              textAlign: 'center',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            404 | Not found page
          </div>
        </Route>

        {/* <Route>
          <Redirect to="./404"></Redirect>
        </Route> */}
      </Switch>

      {/* {estaRegistrado ? (
        <PaginaAnuncios
          estaRegistrado={estaRegistrado}
          cerrar={handleLogout}
        ></PaginaAnuncios>
      ) : (
        <PaginaLogin estoyLogeado={handleLogin}></PaginaLogin>
      )} */}
      {/* <PaginaAnuncios></PaginaAnuncios>
      
      
       */}
    </div>
  );
}

export default App;
