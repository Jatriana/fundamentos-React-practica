import React from 'react';
import Layout from '../layout/layout';
import NuevoAnuncioForm from '../compartidos/NuevoAnuncioForm';
import { crearAnuncio } from '../../api/anuncios';

const PaginaNuevoAnuncio = ({ estaRegistrado, history, ...props }) => {
  const [error, setError] = React.useState(null);
  const [enviandoDatos, setEnviandoDatos] = React.useState(false);
  const [anuncioCreado, setAnuncioCreado] = React.useState(false);

  const resetError = () => setError(null);
  const resetEnviandoDatos = () => setEnviandoDatos(null);
  React.useEffect(() => {
    if (anuncioCreado) {
      history.push('/');
    }
  });

  const handleSubmit = async (contenido) => {
    resetError();
    setEnviandoDatos(true);
    try {
      await crearAnuncio(contenido);
      setAnuncioCreado(true);
    } catch (error) {
      setError(error);
      setEnviandoDatos(false);
    } finally {
      setAnuncioCreado(false);
    }
  }


  return (
    <Layout title="Nuevo Anuncio" estaRegistrado={estaRegistrado} {...props}>
      <div>PaginaNuevoAnuncio</div>

      <div>
        <NuevoAnuncioForm
          onSubmit={handleSubmit}
          anuncioCreado={anuncioCreado}
          enviandoDatos={enviandoDatos}
          {...props}
        ></NuevoAnuncioForm>


        {error && (
          <div onClick={resetError} className="paginaLogin-error">
            [X] {error.message}
          </div>
        )}
        {enviandoDatos && (
          <div onClick={resetEnviandoDatos} className="paginaLogin-cargando">
            [X] Cargando datos
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PaginaNuevoAnuncio;
