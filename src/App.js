import React from 'react';
import { PaginaLogin } from './componentes/autenticazion/login/index';
import {
  PaginaAnuncios,
  PaginaDetalleAnuncio,
  PaginaNuevoAnuncio,
} from './componentes/anuncios/index';

function App() {
  /**estado logeado */
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogged = ( )=>setIsLogged(true)

  return (
    <div className="App">
      <PaginaLogin isLogged={handleLogged} ></PaginaLogin>

      {/* <PaginaAnuncios></PaginaAnuncios>
      <PaginaDetalleAnuncio></PaginaDetalleAnuncio>
      <PaginaNuevoAnuncio></PaginaNuevoAnuncio>
       */}
    </div>
  );
}

export default App;
