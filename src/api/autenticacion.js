import cliente from './cliente';

export const login = (credenciales) => {
  return cliente.post('Api/auth/login', credenciales);
};
