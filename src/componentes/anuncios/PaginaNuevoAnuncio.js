import React from 'react';
import Layout from '../layout/layout';
import NuevoAnuncioForm from '../compartidos/NuevoAnuncioForm';
import { crearAnuncio } from '../../api/anuncios';
// import { set } from 'date-fns';

const PaginaNuevoAnuncio = (props) => {
  const [anuncioCreado, setAnuncioCreado] = React.useState(false);

  React.useEffect(() => {
    if (anuncioCreado) {
     
     console.log('he creado un anuncio')
  }} );

  
  const handleSubmit = async (contenido) => {

    
    console.log('antes de la llamada la api res',contenido)
    crearAnuncio(contenido).then(setAnuncioCreado(true));
  }
 
  return (
    <Layout title="Nuevo Anuncio"onSubmit={handleSubmit} {...props}>
      <div>PaginaNuevoAnuncio</div>

      <div>
      <NuevoAnuncioForm onSubmit={handleSubmit}></NuevoAnuncioForm>
      </div>
      
    </Layout>
  );
};

export default PaginaNuevoAnuncio;
