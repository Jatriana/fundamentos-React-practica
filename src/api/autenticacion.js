import cliente, { configCliente, resetCliente } from './cliente';


export const login = (credenciales) => {
  return cliente
    .post('Api/auth/login', credenciales)
    .then(({ accessToken }) => {
      configCliente({ accessToken });
      localStorage.setItem('autorizado', accessToken);
    
    });
};

export const recuerdame=()=>{
  resetCliente()
  localStorage.removeItem('autorizado');
}


export const cerrarSecion = () => {
  return Promise.resolve().then(() => {
    resetCliente();
    localStorage.removeItem('autorizado');
  });
};
