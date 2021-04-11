import Type from 'prop-types';
import React from 'react';

import './FiltroAnuncios.css';

function NuevoAnuncioForm({
  onSubmit,
  anuncioCreado,
  enviandoDatos,

  ...props
}) {
  const [contenidoFiltro, setContenidoFiltro] = React.useState({
    name: '',
    price: '',
    sale: '',
    tags: [],
  });

  const handleChange = (event) => {
    setContenidoFiltro((oldContenidoFiltro) => {
      const newContenidoFiltro = {
        ...oldContenidoFiltro,
        [event.target.name]: event.target.value,
      };

      return newContenidoFiltro;
    });
  };
  let url = '';
  if (contenidoFiltro.sale !== null) {
    url += `/sale=${contenidoFiltro.sale}`;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { name, price, sale, tags } = contenidoFiltro;
  return (
    <div className="header-form">
      <form className="filtroForm" onSubmit={handleSubmit} {...props}>
        <div>
          <div>Filtros:</div>
          <label>
            Por nombre
            <input
              type="text"
              name="name"
              label="nombre del articulo"
              className="filtroForm-campo"
              value={name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <div>Precio</div>
          <label>
            desde
            <input
              type="text"
              name="price"
              label="desde"
              className="filtroForm-campo"
              value={price}
              onChange={handleChange}
            />
          </label>
          <span>hasta</span>
          <label>
            <input
              type="text"
              name="price"
              label="hasta"
              className="filtroForm-campo"
              value={price}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <div>tipo</div>
          <label>
            Venta
            <input
              type="checkbox"
              name="sale"
              checked={contenidoFiltro.sale === 'true'}
              value={true}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Compra
            <input
              type="checkbox"
              name="sale"
              value={false}
              checked={contenidoFiltro.sale === 'false'}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <div>
          <div></div>
          <span>Etiquetas:</span>

          <select name="tags" value={tags} onChange={handleChange}>
            <option value={''}>seleciona</option>
            <option value={'lifeStyle'}>lifeStyle</option>
            <option value={'motor'}>motor</option>
            <option value={'mobile'}>mobile</option>
            <option value={'work'}>work</option>
          </select>
        </div>

        <input
          type="submit"
          className="filtroForm-button"
          variant="primary"
          value="filtrar"
        ></input>
      </form>
    </div>
  );
}

export default NuevoAnuncioForm;
