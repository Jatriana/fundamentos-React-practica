import cliente, { configCliente, resetCliente } from './cliente';
import storage from '../componentes/autenticazion/storage';

export const login = (credenciales) => {
  return cliente
    .post('Api/auth/login', credenciales)
    .then(({ accessToken }) => {
      configCliente({ accessToken });
      storage.set('token', accessToken);
    });
};

export const recuerdame = () => {
  resetCliente();
  storage.remove('token');
};

export const cerrarSecion = () => {
  return Promise.resolve().then(() => {
    resetCliente();
    storage.remove('token');
  });
};
