import { string } from 'prop-types';
import React from 'react';
import Button from './button';
import CamposForm from './CamposForm';
import '../autenticazion/login/LoginForm.css';

const NuevoAnuncioForm = (onSubmit, ...props) => {
  const [contenido, setContenido] = React.useState({
    name: '',
    price: '',
    sale: false,
    tags: [],
  });
console.log(onSubmit)
  //   const photoRef = React.useRef();
  //   const [archivos, setArchivo] = useState();
  //   const subirArchivo = (event) => {
  //     setArchivo(event)
  //   };

  // const insertarArchivo = async () => {
  //   const file = new FormData(contenido);
  //   console.log(file);
  // };
  // insertarArchivo();
  const handleChange = (event) => {
    setContenido((oldContenido) => {
      const newContenido = {
        ...oldContenido,
        [event.target.name]: event.target.value,
      };
      console.log(newContenido);

      return newContenido;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(onSubmit(contenido))
    onSubmit(contenido);
    console.log(contenido);

    console.log(event);
  };

  const { name, price, sale, tags } = contenido;
  return (
    <form className="loginForm" onSubmit={handleSubmit}{...props}>
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

      {/* <div>
        <div>
          <span>
            Foto
            <input type="file" onChange={(event)=>subirArchivo(event.target.file)} />
          </span>
        </div>
      </div> */}

      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={!name || !price}
      >
        submit
      </Button>
    </form>
  );
};

export default NuevoAnuncioForm;
