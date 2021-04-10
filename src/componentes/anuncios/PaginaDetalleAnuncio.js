import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { borrarAnuncio, obtenerDetalleAnuncio } from '../../api/anuncios';
import Layout from '../layout/layout';
import Button from '../compartidos/button';

const fotoAnuncioBaseUrl = `http://localhost:3001`;
const PaginaDetalleAnuncio = ({ match, estaRegistrado, history, ...props }) => {
  const [anuncio, setAnuncio] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [abrirAviso, setAbrirAviso] = React.useState(false);
  const [avisoBorrado, setAvisoBorrado] = React.useState(false);
  const anuncioId = match.params.id;

  React.useEffect(() => {
    obtenerDetalleAnuncio(anuncioId).then(setAnuncio).catch(setError);
  }, [anuncioId, setAnuncio]);

  if (error || error === 404) {
    return <Redirect to="/404"></Redirect>;
  }

  let placeholder = false;
  if (anuncio.photo !== null) {
    placeholder = true;
  }

  const handleClickBorrar = () => {
    borrarAnuncio(anuncio.id).then(setAvisoBorrado(true));
  };

  const handleAbrirAviso = () => {
    setAbrirAviso(!abrirAviso);
  };

  if (avisoBorrado) {
    history.push('/');
  }

  const Cuadrodialogo = () => {
    return (
      <div>
        <div>
          <Button onClick={handleClickBorrar} variant="primary">
            borrar
          </Button>{' '}
          <Button onClick={handleAbrirAviso} variant="primary">
            cerrar
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Detalle del anuncio" estaRegistrado={estaRegistrado}{...props}>
      <div>PaginaDetalleAnuncio</div>
      <article className="tweet bordered" key={anuncio.id}>
        <div className="letf">
          <div className="tweet-header tweet-actions">
            {placeholder ? (
              <div>
                <span className="tweet-name tweet-separator">
                  <img src={`${fotoAnuncioBaseUrl}${anuncio.photo}`}></img>
                </span>
              </div>
            ) : (
              <div>
                <span className="tweet-username tweet-separator">
                  Articulo Sin foto
                </span>
              </div>
            )}

            <div>
              <span className="tweet-name tweet-separator">{anuncio.name}</span>
            </div>
            <div>
              <span className="tweet-username tweet-separator">
                {anuncio.price}
              </span>

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
            <div></div>
            {estaRegistrado ? (
              <Button onClick={handleAbrirAviso} variant="primary">
                borrar
              </Button>
            ) : (
              <Button as={Link} to="/anuncios" variant="primary">
                volver
              </Button>
            )}
          </div>
        </div>
      </article>
      <article>
        <div className="cuandro-confirmacion">
          <div>
            {abrirAviso && (
              <div>
                <span>Desear borrar el anuncio {anuncio.name}</span>
                <Cuadrodialogo></Cuadrodialogo>
              </div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PaginaDetalleAnuncio;
