import Type from 'prop-types';
import React from 'react';
import Button from './button';
import CamposForm from './CamposForm';
import '../autenticazion/login/LoginForm.css';

function NuevoAnuncioForm({
  onSubmit,
  anuncioCreado,
  enviandoDatos,
  ...props
}) {
  const [contenido, setContenido] = React.useState({
    name: '',
    price: '',
    sale: false,
    tags: [],
  });

  const cargarFichero = (event) => {
    setContenido({ ...contenido, photo: event.target.files[0].name });
  };

  const handleChange = (event) => {
    setContenido((oldContenido) => {
      const newContenido = {
        ...oldContenido,
        [event.target.name]: event.target.value,
      };

      return newContenido;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(contenido);
  };

  const { name, price, sale, tags } = contenido;
  return (
    <form className="loginForm" onSubmit={handleSubmit} {...props}>
      <CamposForm
        type="text"
        name="name"
        label="nombre del articulo"
        className="loginForm-campo"
        value={name}
        onChange={handleChange}
      ></CamposForm>

      <CamposForm
        type="text"
        name="price"
        label="Precio de articulo"
        className="loginForm-campo"
        value={price}
        onChange={handleChange}
      ></CamposForm>

      <div>
        <label>
          Venta
          <input
            type="checkbox"
            name="sale"
            checked={contenido.sale === 'true'}
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
            checked={contenido.sale === 'false'}
            onChange={handleChange}
          ></input>
        </label>
      </div>

      <div>
        <span>Etiquetas: </span>

        <select name="tags" value={tags} onChange={handleChange}>
          <option value={''}>seleciona</option>
          <option value={'lifeStyle'}>lifeStyle</option>
          <option value={'motor'}>motor</option>
          <option value={'mobile'}>mobile</option>
          <option value={'work'}>work</option>
        </select>
      </div>

      <div>
        <div>
          <span>
            Foto
            <input type="file" onChange={cargarFichero} />
          </span>
        </div>
      </div>

      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={enviandoDatos || !name || !price || !sale || !tags}
      >
        submit
      </Button>
    </form>
  );
}

NuevoAnuncioForm.Type = {
  onSubmit: Type.func.isRequired,
  contenido: Type.object.isRequired,
  anuncioCreado: Type.bool,
};

export default NuevoAnuncioForm;
