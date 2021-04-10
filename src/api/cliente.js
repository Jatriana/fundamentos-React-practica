/*libreria axios es la encargada de hacer las llamas a la api */
import axios from 'axios';

const cliente = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });
cliente.interceptors.response.use(
  (response) => response.data,

  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response.data,
    });
  }
);

const setAutorizacionHeader = (token) => {
  cliente.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAutorizacionHeader = () => {
  delete cliente.defaults.headers.common['Authorization'];
};

export const configCliente = ({ accessToken }) => {
  if (accessToken) {
    setAutorizacionHeader(accessToken);
  }
};

export const resetCliente = () => {
  removeAutorizacionHeader();
};

export default cliente;
