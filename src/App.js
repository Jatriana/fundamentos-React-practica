import React from 'react';
import { PaginaLogin } from './componentes/autenticazion/login/';
import {
  PaginaAnuncios,
  PaginaDetalleAnuncio,
  PaginaNuevoAnuncio,
} from './componentes/anuncios/index';
import {configCliente }from './api/cliente'

function App() {

const accessToken = localStorage.getItem('autorizado')
console.log(accessToken);
configCliente({accessToken})

  /**estado logeado */
  const [estaRegistrado, setEstaRegistrado] = React.useState(!!accessToken);

  const handleLogin = () => setEstaRegistrado(true);
  const handleLogout = () => setEstaRegistrado(false);

  return (
    <div className="App">
    
      {estaRegistrado ? (
        <PaginaAnuncios estaRegistrado={estaRegistrado} cerrar={handleLogout}></PaginaAnuncios>
      ) : (
        <PaginaLogin estoyLogeado={handleLogin} ></PaginaLogin>
      )}
      {/* <PaginaAnuncios></PaginaAnuncios>
      <PaginaDetalleAnuncio></PaginaDetalleAnuncio>
      <PaginaNuevoAnuncio></PaginaNuevoAnuncio>
       */}
    </div>
  );
}

export default App;
