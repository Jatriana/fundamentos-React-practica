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

export const crearAnuncio = (contenido) => {
  const url = `${anunciosBaseUrl}/v1/adverts/`;
  // let formData = new FormData();
  // contenido.map((element) => formData.append(element));

  return cliente.post(url, contenido);
};
export const borrarAnuncio = (anuncioId) => {
  const url = `${anunciosBaseUrl}/v1/adverts/${anuncioId}`;
  return cliente.delete(url);
};
