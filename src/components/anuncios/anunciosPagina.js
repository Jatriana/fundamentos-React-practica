import { obtenerUltimosAnuncios } from '../../api/anuncios';
import React from 'react';

// const anuncios = [
//   {
//     nombre: 'bicicleta',
//     operacion: 'venta',
//     precio: '450',
//     descripcion:
//       'Vendo bicicleta nueva, solo se le ha dado un uso. La vendo por no usarla ',
//     foto: 'bici.jpg',
//     userId: 1,
//     createdAt: '2021-02-01T19:25:36.038Z',
//     id: 1,
//   },
//   {
//     userId: 1,
//     nombre: 'moto',
//     operacion: 'compra',
//     precio: '450',
//     descripcion: ' Compro motro Marca Rata, usada de no me importa el estado',
//     foto: 'moto.jpg',
//     createdAt: '2021-02-01T19:25:36.038Z',
//     id: 2,
//   },
// ];

const PaginaAnuncios = () => {
  /**se levanta un estado y luego renderizamos */
  const [anuncios, setAnuncios] = React.useState([]);
  /**usamos el useEfecct para hacer las logicas que no tiene tiene nada que ver con el render y controlamos las llamadas de los anuncios*/
  React.useEffect(() => {
    obtenerUltimosAnuncios().then(setAnuncios);
  }, []);

  const handleClick = () => {
    alert('Construyendo un enlace al detalle...');
  };

  const item = anuncios.map((anuncio) => (
    <li onClick={handleClick} key={anuncio.id}>
      {anuncio.nombre} <br></br>
      <span>{anuncio.precio}</span> <br></br>
      <span>{anuncio.operacion}</span>
      <br></br>
    </li>
  ));
  return (
    <div className="paginaAnuncios">
      <ul>{item}</ul>
    </div>
  );
};

export default PaginaAnuncios;
