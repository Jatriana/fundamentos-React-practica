/*cliente es donde de vas contrtolar todas las llamadas(peticiones a la API res) a la servidor de datos (backend) equivalente al dataservice*/
import client from './client';

const tweetsBaseUrl = '/api';

export const obtenerUltimosAnuncios = () => {
  const url = `${tweetsBaseUrl}/anuncios`;
  return client.get(url);
};
