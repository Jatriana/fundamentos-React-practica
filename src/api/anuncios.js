/*cliente es donde de vas contrtolar todas las llamadas(peticiones a la API res) a la servidor de datos (backend) equivalente al dataservice*/
import cliente from './cliente';

const anunciosBaseUrl = '/api';

export const obtenerUltimosAnuncios = () => {
  const url = `${anunciosBaseUrl}/v1/adverts`;
  return cliente.get(url);
};

export const obtenerDetalleAnuncio = (anuncioId) => {
  const url = `${anunciosBaseUrl}/v1/adverts/${anuncioId}`;

  return cliente.get(url);
};

Export const crearAnuncio = (anuncioId) => {
  const url = `${anunciosBaseUrl}/v1/adverts/`;

  return cliente.post(url);
};
export const borrarAnuncio = (anuncioId) => {
  console.log('estoy en la funcion borrar', anuncioId);
  const url = `${anunciosBaseUrl}/v1/adverts/${anuncioId}`;
  return cliente.delete(url);
};
