import './App.css';
import {
  PaginaAnuncios,
  PaginaDetalleAnuncio,
  PaginaNuevoAnuncio,
} from './componentes/anuncios/index';

function App() {
  return (
    <div className="App">
      <PaginaAnuncios></PaginaAnuncios>
      <PaginaDetalleAnuncio></PaginaDetalleAnuncio>
      <PaginaNuevoAnuncio></PaginaNuevoAnuncio>

    </div>
  );
}

export default App;
