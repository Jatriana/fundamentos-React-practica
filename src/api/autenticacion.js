import cliente, { configCliente, resetCliente } from './cliente';
import storage from '../componentes/autenticazion/storage';

export const login = (credenciales) => {
  return cliente
    .post('Api/auth/login', credenciales)
    .then(({ accessToken }) => {
      configCliente({ accessToken });
      storage.set('token', accessToken);
      if (accessToken) {
        storage.set('credenciales', credenciales);
      }
    });
};

export const noRecordarme = () => {
  storage.remove('credenciales');
};

export const cerrarSecion = () => {
  return Promise.resolve().then(() => {
    resetCliente();
    storage.remove('token');
    storage.remove('token');
    storage.remove('credenciales');
  });
};
