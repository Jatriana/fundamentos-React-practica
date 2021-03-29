/*cliente es donde de vas contrtolar todas las llamadas(peticiones a la API res) a la servidor de datos (backend) equivalente al dataservice*/
import cliente from './cliente';

const anunciosBaseUrl = '/api';

export const obtenerUltimosAnuncios = () => {
  const url = `${anunciosBaseUrl}/anuncios`;
  return cliente.get(url);
};
