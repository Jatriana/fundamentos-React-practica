/*libreria axios es la encargada de hacer las llamas a la api */
import axios from 'axios';

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });
/**los interceptos son los que nos van a servir los datos cuando la respuesta sea correcta  */
client.interceptors.response.use((response) => response.data);

export default client;