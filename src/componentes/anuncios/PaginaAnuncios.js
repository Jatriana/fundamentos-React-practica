import React from 'react';
import { Link } from 'react-router-dom';
import { obtenerUltimosAnuncios } from '../../api/anuncios';
import Layout from '../layout/layout';
import Button from '../compartidos/button';
import Type from 'prop-types';
import './PaginaAnuncios.css';

const ListaVacia = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Escribe tu primer Anuncio!</p>
    <Button as={Link} to="/anuncio/new" variant="primary">Anuncio</Button>
  </div>
);

const PaginaAnuncios = ({ ...props }) => {
  /**se levanta un estado y luego renderizamos */
  const [anuncios, setAnuncios] = React.useState([]);
 
  /**usamos el useEfecct para hacer las logicas que no tiene tiene nada que ver con el render y controlamos las llamadas de los anuncios*/
  

  
  React.useEffect(() => {
    obtenerUltimosAnuncios()
      .then(setAnuncios)
  }, []);

  const handleClick = () => {
    alert('Construyendo un enlace al detalle...');
  };
  console.log(anuncios);
  const items = anuncios.map((anuncio) => (
    <article className="tweet bordered" key={anuncio.id}>
      <div className="letf">
        <div className="tweet-header tweet-actions">
          <div>
            <span className="tweet-name tweet-separator">{anuncio.name}</span>
          </div>
          <div>
            <span className="tweet-username tweet-separator">
              {anuncio.price}
            </span>
          </div>

          <div>
            {anuncio.sale ? (
              <span className="tweet-separator">Venta</span>
            ) : (
              <span className="tweet-username tweet-separator">Compra</span>
            )}
          </div>
          <div>
            <span className="tweet-username tweet-separator">
              {anuncio.tags}
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button onClick={handleClick} variant="primary">
            Detalles
          </Button>
        </div>
      </div>
    </article>
  ));
  return (
    <Layout title="Listados de Anuncios" {...props}>
      <div className="paginaAnuncios">
        {anuncios.length ? <div>{items}</div> : <ListaVacia></ListaVacia>}
        
        
       
      </div>
    </Layout>
  );
};

PaginaAnuncios.Type = {
  anuncios: Type.array.isRequired,
};
export default PaginaAnuncios;
