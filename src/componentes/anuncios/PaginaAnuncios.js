import React from 'react';
import { Link } from 'react-router-dom';
import { obtenerUltimosAnuncios } from '../../api/anuncios';
import Layout from '../layout/layout';
import Button from '../compartidos/button';
import Type from 'prop-types';
import './PaginaAnuncios.css';

const ListaVacia = ({ estaRegistrado }) => (
  <div style={{ textAlign: 'center' }}>
    <p>Escribe tu primer Anuncio!</p>
    <div></div>
    {estaRegistrado ? (
      <Button as={Link} to="/anuncio/new" variant="primary">
        Anuncio
      </Button>
    ) : (
      <Button as={Link} to="/login" variant="primary">
        Login
      </Button>
    )}
  </div>
);

const PaginaAnuncios = ({ estaRegistrado, history, ...props }) => {
  const [anuncios, setAnuncios] = React.useState([]);
  

  React.useEffect(() => {
    obtenerUltimosAnuncios().then(setAnuncios);
  }, []);

  const handleClick = (anuncioId) => {
    history.push(`/anuncio/${anuncioId}`);
  };

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
          <Button
            onClick={() => handleClick(anuncio.id)}
            history={history}
            variant="primary"
          >
            Detalles
          </Button>
        </div>
      </div>
    </article>
  ));
  return (
    <Layout title="Listados de Anuncios" estaRegistrado={estaRegistrado}{...props}>
      <div className="paginaAnuncios">
        {anuncios.length ? (
          <div>{items}</div>
        ) : (
          <ListaVacia {...props}></ListaVacia>
        )}
      </div>
    </Layout>
  );
};

PaginaAnuncios.Type = {
  anuncios: Type.array.isRequired,
};
export default PaginaAnuncios;
