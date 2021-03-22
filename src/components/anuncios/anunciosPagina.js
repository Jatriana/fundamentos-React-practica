const articulos = [
  {
    nombre: 'bicicleta',
    operacion: 'venta',
    precio: '450',
    descripcion:
      'Vendo bicicleta nueva, solo se le ha dado un uso. La vendo por no usarla ',
    foto: 'bici.jpg',
    userId: 1,
    createdAt: '2021-02-01T19:25:36.038Z',
    id: 1,
  },
  {
    userId: 1,
    nombre: 'moto',
    operacion: 'compra',
    precio: '450',
    descripcion: ' Compro motro Marca Rata, usada de no me importa el estado',
    foto: 'moto.jpg',
    createdAt: '2021-02-01T19:25:36.038Z',
    id: 2,
  },
];

const PaginaAnuncios = () => {
  const item = articulos.map((anuncio) => (
    <li key={anuncio.id}>
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
