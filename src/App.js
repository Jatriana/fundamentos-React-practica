import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PaginaLogin } from './componentes/autenticazion/login/';
import { configCliente } from './api/cliente';
import {
  PaginaAnuncios,
  PaginaDetalleAnuncio,
  PaginaNuevoAnuncio,
} from './componentes/anuncios/index';

function App() {
  const accessToken = localStorage.getItem('autorizado');
  console.log(accessToken);
  configCliente({ accessToken });

  /**estado logeado */
  const [estaRegistrado, setEstaRegistrado] = React.useState(!!accessToken);

  const handleLogin = () => setEstaRegistrado(true);
  const handleLogout = () => setEstaRegistrado(false);
  
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/anuncio/new" component={PaginaNuevoAnuncio}></Route>
        <Route path="/anuncio/:id" component={PaginaDetalleAnuncio}></Route> */}
        <Route path="/anucios" component={PaginaAnuncios}></Route>
        <Route path="/login" component={PaginaLogin}></Route>
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
          <Redirect to="/" as="/anuncios"></Redirect>
        </Route>
        <Route>
          <Redirect to="/404"></Redirect>
        </Route> */}
      </Switch>

      {/* {estaRegistrado ? (
        <PaginaAnuncios estaRegistrado={estaRegistrado} cerrar={handleLogout}></PaginaAnuncios>
      ) : (
        <PaginaLogin estoyLogeado={handleLogin} ></PaginaLogin>
      )} */}
      {/* <PaginaAnuncios></PaginaAnuncios>
      <PaginaDetalleAnuncio></PaginaDetalleAnuncio>
      <PaginaNuevoAnuncio></PaginaNuevoAnuncio>
       */}
    </div>
  );
}

export default App;
